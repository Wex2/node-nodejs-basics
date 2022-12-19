import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const performCalculations = async () => {

    const workerPath = fileURLToPath(new URL('./worker.js', import.meta.url));

    const resultsFromWorkers = await Promise.allSettled(cpus().map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: i + 10 });
            worker.on('message', resolve);
            worker.on('error', reject);
        });
    }))

    const result = resultsFromWorkers.map(({ status, value }) => (
        {
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: value ? value : null
        }
    ));

    console.log(result);
};

await performCalculations();
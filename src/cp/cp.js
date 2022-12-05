import { fork } from 'child_process';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {

    const filePath = fileURLToPath(new URL('./files/script.js', import.meta.url));

    fork(filePath, args);
};

await spawnChildProcess(['arg1', 'arg2']);
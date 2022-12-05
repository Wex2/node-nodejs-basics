import { Transform, pipeline } from 'stream';

const transform = async () => {

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse() + '\n');
        },
    });

    pipeline(process.stdin, reverse, process.stdout, (e) => {
        throw e;
    });
};

await transform();
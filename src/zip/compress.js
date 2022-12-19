import { pipeline } from 'stream/promises';
import * as fs from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';

const compress = async () => {

    const srcPath = fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url));
    const compPath = fileURLToPath(new URL('./files/archive.gz', import.meta.url));

    const compressStream = createGzip();
    const readStream = fs.createReadStream(srcPath);
    const writeStream = fs.createWriteStream(compPath);

    try {
        await pipeline(readStream, compressStream, writeStream);
    }
    catch (e) {
        throw e;
    }

};

await compress();
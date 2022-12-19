import { pipeline } from 'stream/promises';
import * as fs from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';

const decompress = async () => {

    const srcPath = fileURLToPath(new URL('./files/archive.gz', import.meta.url));
    const deCompPath = fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url));

    const compressStream = createGunzip();
    const readStream = fs.createReadStream(srcPath);
    const writeStream = fs.createWriteStream(deCompPath);

    try {
        await pipeline(readStream, compressStream, writeStream);
    }
    catch (e) {
        throw e;
    }
};

await decompress();
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const read = async () => {

    const filePath = fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout);
};

await read();
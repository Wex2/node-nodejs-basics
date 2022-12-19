import * as fs from 'fs';
import { fileURLToPath } from 'url';

const write = async () => {

    const filePath = fileURLToPath(new URL('./files/fileToWrite.txt', import.meta.url));

    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();
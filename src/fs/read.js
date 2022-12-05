import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';

const read = async () => {

    const errorMsg = 'FS operation failed';
    const filePath = fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));

    try {
        const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
        console.log(fileContent);
    }
    catch {
        throw new Error(errorMsg);
    }
};

await read();
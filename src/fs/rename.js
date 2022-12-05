import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';

const rename = async () => {

    const errorMsg = 'FS operation failed';
    const wrongFilePath = fileURLToPath(new URL('./files/wrongFilename.txt', import.meta.url));
    const properFilePath = fileURLToPath(new URL('./files/properFilename.md', import.meta.url));

    try {
        await fs.rename(wrongFilePath, properFilePath);
    }
    catch {
        throw new Error(errorMsg);
    }
};

await rename();
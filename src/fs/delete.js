import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';

const remove = async () => {

    const errorMsg = 'FS operation failed';
    const filePath = fileURLToPath(new URL('./files/fileToRemove.txt', import.meta.url));

    try {
        await fs.rm(filePath);
    }
    catch {
        throw new Error(errorMsg);
    }
};

await remove();
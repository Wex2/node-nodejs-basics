import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';

const list = async () => {

    const errorMsg = 'FS operation failed';
    const srcPath = fileURLToPath(new URL('./files/', import.meta.url));

    try {
        const files = await fs.readdir(srcPath);
        console.log(files);
    }
    catch {
        throw new Error(errorMsg);
    }
};

await list();
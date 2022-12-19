import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {

    const errorMsg = 'FS operation failed';
    const srcPath = fileURLToPath(new URL('./files', import.meta.url));
    const copyPath = fileURLToPath(new URL('./files_copy', import.meta.url));

    try {
        const files = await fs.readdir(srcPath);

        await fs.mkdir(copyPath);

        for (const file of files) {
            await fs.cp(path.join(srcPath, file), path.join(copyPath, file));
        }
    } catch {
        throw new Error(errorMsg);
    }

};

await copy();

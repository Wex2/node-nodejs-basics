import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';

const create = async () => {

    const errorMsg = 'FS operation failed';
    const filePath = fileURLToPath(new URL('./files/fresh.txt', import.meta.url));
    const fileContent = 'I am fresh and young';

    try {
        await fs.writeFile(filePath, fileContent, { flag: 'wx' });
    }
    catch {
        throw new Error(errorMsg);
    }
};

await create();
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const calculateHash = async () => {

    const filePath = fileURLToPath(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));

    const file = await readFile(filePath);
    const hash = createHash('sha256').update(file).digest('hex');
    console.log(hash);
};

await calculateHash();
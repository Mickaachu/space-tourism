import path from 'path';
import fsPromise from 'fs/promises';

export async function getData() {
    const jsonDirectory = path.join(process.cwd(),'/data.json');
    const readData = await fsPromise.readFile(jsonDirectory);
    const data = JSON.parse(readData);
    return data;

}
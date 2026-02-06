import fs from 'fs';
import { promisify } from 'util';
async function readFileExample() {
    try {
        const data = await fs.promises.readFile('myfile.txt', 'utf-8');
        console.log('file content:', data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}
readFileExample();
const readFileAsync = promisify(fs.readFile);
async function readwithPromisify() {
    try{
        const data = await readFileAsync('myfile.txt', 'utf-8');
        console.log('file content:', data);
    }
    catch(err){
        console.error("Error reading file:", err);
    }
}
readwithPromisify();
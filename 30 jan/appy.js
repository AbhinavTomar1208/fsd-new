// File Operations using Node.js fs (File System) module
import fs from 'fs';
import path from 'path';

// ======================== 1. CREATE A FILE ========================
console.log("1. Creating a file...");
fs.writeFileSync('myfile.txt', 'Hello, this is my first file!');
console.log("File created: myfile.txt");

//======================== 2. READ A FILE ========================
console.log("\n2. Reading a file...");
const content = fs.readFileSync('myfile.txt', 'utf8');
console.log("File content:", content);

// ======================== 3. WRITE TO A FILE (overwrite) ========================
console.log("\n3. Writing to a file (overwrite)...");
fs.writeFileSync('myfile.txt', 'This content has been overwritten!');
console.log("File overwritten successfully");

// ======================== 4. APPEND TO A FILE ========================
console.log("\n4. Appending to a file...");
fs.appendFileSync('myfile.txt', '\nThis line is appended to the file.');
console.log("Content appended successfully");

// ======================== 5. RENAME A FILE ========================
console.log("\n5. Renaming a file...");
fs.renameSync('myfile.txt', 'newfile.txt');
console.log("File renamed from myfile.txt to newfile.txt");

// ======================== 6. MOVE A FILE ========================
console.log("\n6. Moving a file...");
const sourceFile = 'newfile.txt';
const destFile = path.join('moved', 'newfile.txt');
// Create 'moved' directory if it doesn't exist
if (!fs.existsSync('moved')) {
    fs.mkdirSync('moved');
}
fs.renameSync(sourceFile, destFile);
console.log("File moved to moved/ directory");

// ======================== 7. DELETE A FILE ========================
console.log("\n7. Deleting a file...");
fs.unlinkSync(destFile);
console.log("File deleted successfully");

// ======================== 8. DELETE A DIRECTORY ========================
console.log("\n8. Deleting a directory...");
fs.rmdirSync('moved');
console.log("Directory deleted successfully");

// ======================== ASYNC OPERATIONS ========================
console.log("\n\n--- ASYNC FILE OPERATIONS ---\n");

// ======================== 1. CREATE FILE (Async) ========================
console.log("1. Creating file (Async)...");
fs.writeFile('asyncfile.txt', 'Async file content', (err) => {
    if (err) console.log(err);
    else console.log("Async file created");

    // ======================== 2. READ FILE (Async) ========================
    console.log("2. Reading file (Async)...");
    fs.readFile('asyncfile.txt', 'utf8', (err, data) => {
        if (err) console.log(err);
        else console.log("File content:", data);

        // ======================== 3. APPEND FILE (Async) ========================
        console.log("3. Appending to file (Async)...");
        fs.appendFile('asyncfile.txt', '\nAsync appended content', (err) => {
            if (err) console.log(err);
            else console.log("Content appended");

            // ======================== 4. RENAME FILE (Async) ========================
            console.log("4. Renaming file (Async)...");
            fs.rename('asyncfile.txt', 'asyncrenamed.txt', (err) => {
                if (err) console.log(err);
                else console.log("File renamed to asyncrenamed.txt");

                // ======================== 5. DELETE FILE (Async) ========================
                console.log("5. Deleting file (Async)...");
                fs.unlink('asyncrenamed.txt', (err) => {
                    if (err) console.log(err);
                    else console.log("Async file deleted successfully");
                });
            });
        });
    });
});

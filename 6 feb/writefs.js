import fs from 'fs';
async function writeFileExample() {
    try{
        await fs.writeFile('myfile.txt', 'Hello, this is a sample text file.', 'utf-8');
        const data={name:'john',age:30,city:'New York'};
        await fs.writeFile('data.json', JSON.stringify(data,null,2), 'utf-8');
        console.log("Files created successfully");
    }catch(err){
        console.error("Error writing file:", err);
    }
}
writeFileExample();
const fs = require('fs').promises;

async function main(){
    await fs.writeFile('async.txt','Hello');
    console.log("Done");
}

main();

const read = async() =>{
    const data = await fs.readFile('async.txt','utf-8'); 
    await fs.unlink('async.txt');
    return data;
}

async function update(){
    await fs.appendFile('async.txt','\tWorld');
}

const print = async() =>{
    await update();
    const ans = await read();
    console.log(ans);
}
print();





 

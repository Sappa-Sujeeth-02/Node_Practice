const fs = require('fs').promises;
const method = process.argv[2];
const name = process.argv[3];
const data = process.argv[4];

async function main(){
   try{
    if(method==='write'){
        await fs.writeFile(name,data);
        console.log("File Created");
   }else if(method==='read'){
        const res = await fs.readFile(name,'utf-8');
        console.log(res);
    }else if(method==='add'){
        await fs.appendFile(name,data);
        console.log("File Updated");
    }else if(method==='delete'){
        await fs.unlink(name);
        console.log('File Deleted');
    }
   }catch(err){
    console.log('Error:',err.message);
   }
}

main();


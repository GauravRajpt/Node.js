const fs= require('fs');

const input = process.argv;


const path= require('path');
const dirpath= path.join(__dirname,'crud');
const filepath= dirpath+'/apple.txt';
//create
//fs.writeFileSync(filepath,"this is text file")

//read
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })

// update
// fs.appendFile(filepath,"file name is apple.txt",(err)=>{
//     if(!err) console.log("file is updated")
// });

//rename
// fs.rename(filepath, `${dirpath}/fruit.txt`, (err)=>{
//     if(!err) console.log("filename updated");
// });

//delete
fs.unlinkSync(`${dirpath}/fruit.txt`);
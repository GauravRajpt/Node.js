/*show file list*/

//create a folder with name files

// use path module

const fs= require('fs');

const path= require('path')
const joinedPath= path.join(__dirname, "files");
console.log(joinedPath)

// for(let i=0; i<5; i++){
//     fs.writeFileSync(joinedPath+"/hello"+i,"this is file")
// }

//read the file

fs.readdir(joinedPath,(err,files)=>{
files.forEach((item)=>{
    console.log(item)
})
})

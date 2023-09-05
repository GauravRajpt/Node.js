const express= require('express')


// const path= require('path').resolve("./index.html");
// console.log(path)

const app= express();
// console.log(__filename)

app.use(express.static(__dirname+"/public"))

app.get('/about',(req,res)=>{
    // res.send(req.query.id)
    // http://localhost:5000/about?id=33
    res.sendFile(__dirname+"/public/about.html")
})

app.listen(5000);

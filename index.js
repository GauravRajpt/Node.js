const express= require('express')
const path= require('path')
const app= express();
const publicpath= path.join(__dirname,'public');

// app.use(express.static(publicpath));

app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
});
app.get('/about',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
});
app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/nopage.html`)
});


app.listen(5000)
const express= require('express');
const app=express();
//'' is path 
app.get('',(req,res)=>{
    res.send('hello this is home page');
})
app.get('/about',(req,res)=>{
    res.send('hello this is about page')
})
app.listen(5000);
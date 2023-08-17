const express= require('express')
const db= require('./mongodb.js/mongodb')
const app= express()

app.get('/',async (req, res)=>{
    let data= await db();
    data= await data.find().toArray()
    res.send(data)
})

app.listen(5000);
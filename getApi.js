const express= require('express')
const db= require('./mongodb.js/mongodb')
const dbConnection = require('./mongodb.js/mongodb')
const app= express()
app.use(express.json())
app.get('/',async (req, res)=>{
    let data= await db();
    data= await data.find().toArray();
    res.send(data)
})

app.post('/', async(req,res)=>{
    const data= await dbConnection();
    const result= await data.insertOne(req.body);
    res.send(result)
})

app.put('/:name',async(req,res)=>{
    const data= await dbConnection();
    const result= await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    res.send({result:'updated'})
})

app.listen(5000);
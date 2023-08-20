const express= require('express');
require('./config');
const bikes= require('./bikes');

const app= express();
app.use(express.json())
app.post('/',async (req,res)=>{
    let data=new bikes(req.body);
    let result=await data.save()
    res.send(result);
    console.log(result)
})

app.listen(5000)
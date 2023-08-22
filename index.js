const express= require('express');
require('./config');
const bikes= require('./bikes');

const app= express();
// app.use(express.json())
/* app.post('/',async (req,res)=>{
    let data=new bikes(req.body);
    let result=await data.save()
    res.send(result);
   
}) */

app.get('/list', async (req, res)=>{
    let data= await bikes.find();
    console.log(data)
    res.send(data)
})

// app.delete('/:_id', async (req, res)=>{
//     let data = await bikes.deleteOne(req.params)
//     console.log(data);
//     res.send(data)
// })

app.put('/:_id', async (req, res)=>{
    let data = await bikes.updateOne(
        
            req.params,
            {
                $set:{
                    name:'kesri'
                }
            }
    
    )
    console.log(data);
    res.send(data)
})

app.listen(5000)
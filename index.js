const express= require('express');
require('./config');
const bikes= require('./bikes');

const app= express();


app.get('/search/:key', async (req, res)=>{
    const data = await bikes.find({
        $or:[
            {
            "name":{$regex:req.params.key}
        },
        {
            "brand":{$regex:req.params.key}
        }
    ]
    });
    console.log(req.params.key);
    res.send(data);
})
app.listen(5000)
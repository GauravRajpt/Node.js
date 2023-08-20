const mongoose= require('mongoose')

const bikesSchema= new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
})

module.exports= mongoose.model('bikes',bikesSchema)
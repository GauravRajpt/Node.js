const mongoose= require('mongoose');
const productSchema= mongoose.Schema(
    {
        name:String,
        price:Number
    }
);
const main= async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com')
   
    const productsModel= mongoose.model('bikes',productSchema);
    let data= new productsModel({
        name:'m8',price:9000
    });
    const result= await data.save();
    console.log(result)
}

main()

const deletedata= async()=>{
    const productsModel= mongoose.model('bikes',productSchema);
    const data= await productsModel.deleteOne({
        name:'m8'
    })
}
deletedata()
const finddata= async()=>{
    const productsModel= mongoose.model('bikes',productSchema);
    const data= await productsModel.find()
    console.log(data)
}
finddata()
// const update= async ()=>{
//     const products= mongoose.model('bikes',productSchema);
// let data=await products.updateOne(
//     {
//         name:'m8'
//     },
//     {$set:{
//         price:800   
//     }}
   
// )
// console.log(data)

// }
// update()
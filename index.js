const mongoose= require('mongoose');

const main= async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com')
    const productSchema= mongoose.Schema(
        {
            name:String,
            price:Number
        }
    );
    const productsModel= mongoose.model('bikes',productSchema);
    let data= new productsModel({
        name:'m8',price:1000
    });
    const result= await data.save();
    console.log(result)
}

main()
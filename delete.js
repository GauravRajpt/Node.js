const dbConnect= require('./mongodb.js/mongodb');

const deleteData=async ()=>{
const db= await dbConnect();
const result= await db.deleteMany({
    name:'note x'
})
}
deleteData();
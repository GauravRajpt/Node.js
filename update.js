const dbConnection= require('./mongodb.js/mongodb.js')

const updateData= async ()=>{

    const db= await  dbConnection();
    const result= await db.updateMany({
        name:'note5'
    },
    {
        $set:{
            name:'note x'
        }
    });
    console.log(result)
}

updateData()
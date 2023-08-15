const dbConnection= require('./mongodb.js/mongodb.js');

const insertData=async ()=>{
    const db= await dbConnection();
    const result= await db.insertMany([
        {
            name:'note5',
            brand:'vivo'
        },
        {
            name:'mac',
            brand:'apple'
        },

    ]
    )
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insertData()
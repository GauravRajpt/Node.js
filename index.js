
const dbConnection= require('./mongodb.js/mongodb.js')


dbConnection().then(async (i)=>{
i.find().toArray().then(a=>console.log(a))
})


const express= require("express");

const app= express();

app.use(express.json())


const user=[
{
  name:"abhishke",
  id:"1"
}
]



app.listen(3000, ()=>{
  console.log("hiii")
})




const userRouter= express.Router();
app.use("/user",userRouter)

userRouter
.route("/")
.get(getUser)
.post(postUser)

function getUser(req,res){
    
  // user.user= req.user;
  console.log(user)
  res.send(
      {
          "message":"data recieved succesfully",
          "user":user
      }
  )

}

function postUser(req,res){
    
  user.push = req.body
  console.log(user)
  res.send(
      {
          "message":"data recieved succesfully",
          "user":user
      }
  )

}
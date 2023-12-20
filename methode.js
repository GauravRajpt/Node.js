

module.exports=function getUser(req,res){
    
    user= req.user;
    console.log(user)
    res.json(
        {
            "message":"data recieved succesfully",
            "user":user
        }
    )

}
const express= require("express")

const app= express();
// app.use(bodyParser.json());
app.use(express.json());
const authRouter= express.Router();
app.use('/',authRouter);

express.static(__dirname+"/public")

authRouter
.route('/')
.get(getUser)

authRouter
.route('/user')
.post(postUser)

function postUser(req, res){
  console.log(req.body)
    res.send("hello")
    
}


function getUser(req, res){
  res.sendFile("/public/index.html",{root:__dirname})
}
app.listen(3000)


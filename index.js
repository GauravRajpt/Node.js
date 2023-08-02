const express= require('express')
const path= require('path')
const app= express();
const publicpath= path.join(__dirname,'public');

// app.use(express.static(publicpath));


app.set('view engine','ejs');

const reqFilter= (req, res, next)=>{
 if(!req.query.age){
    res.send('please provide age')
 }
 else if(req.query.age<18){
    res.send('you cannot access this age')
 }
 else{
    next()
 }
}

app.use(reqFilter)
app.get('/profile',(req,res)=>{
    const user={
        name:'gaurav',
        city:'haridwar',
        skills:['html','css','js','node']
    };
    res.render('profile',{user})
})
app.get('/about',(req,res)=>{
    const user={
        name:'gaurav',
        city:'haridwar',
        skills:['html','css','js','node']
    };
    res.render('about',{user})
})
app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/nopage.html`)
});


app.listen(5000)
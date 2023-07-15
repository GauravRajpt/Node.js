let a=20;
let b=0;
//handling ansynchronus data

const waitingData= new Promise((resolve,reject)=>{
    resolve(30)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/Testnodejs')

.then(()=>{
    console.log('connected to mongodb')
}).catch((e)=>{
    console.log('connection denied.',e)
})


//mongodb+srv://sejalmac:Tc179F0e5cwfCX4Z@cluster0.h7joqyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
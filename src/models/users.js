const mongoose = require('mongoose')
const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:false
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})
//we are creating a collection
const userType = new mongoose.model('UserType',userSchema)
module.exports=userType;
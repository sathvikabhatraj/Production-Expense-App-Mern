//creating schema with help of mongoose
//schema is nothing but a table in sql
//schema contains json obj in key value pair format
//schema we can change later also , but table we cant

const mongoose=require('mongoose')

//schema design
const userSchema=new mongoose.Schema({

     name:
     {
        type:String,
        required:[true,'name is required']
     },
     email:

     {
        type:String,
        required:[true,'email is required and should be unique'],
        unique:true
     },
     password:
     {
        type:String,
        required:[true,'password is required']
     }

},{timestamps:true});

//export
//we have already created users model in mongodb site
//userSchema is reference type through which we are creating that model
const userModel=mongoose.model('users',userSchema)
module.exports=userModel
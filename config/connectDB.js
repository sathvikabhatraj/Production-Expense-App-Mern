//establish connection with mongob for that install mongoose package , so that we can create schema easily and do crud operations

const mongoose=require('mongoose')
const colors=require('colors')
//creating function for establishing connection with mongodb
const connectDb=async()=>
{
   try
   {
      //await for connection establishment
      await mongoose.connect(process.env.MONGO_URL);
      console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
   }catch(error)
   {
    console.log(`${error}`.bgRed);
   }
}

module.exports=connectDb;
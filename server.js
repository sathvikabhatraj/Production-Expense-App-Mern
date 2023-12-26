// if we use command npm start then application will run with help of node and if we use command npm run server it runs with help of nodemon

//server.js is main entry point file

const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require('./config/connectDB')
const path=require('path')

//config dot env file
dotenv.config();

//database call
connectDb()

//create rest object, so we can use all features of express with name called app
const app=express();

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//routes, / means home

//user route
app.use('/api/v1/users',require('./routes/userRoute'))
//transaction route
app.use('/api/v1/transactions',require('./routes/transactionRoutes'))


//static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res)
{
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});


//creating port, process.env.PORT works in prdctn mode and manual hardcoded port works in dvlpmnt mode
const PORT=8080 || process.env.PORT

//app will listen to server  at that port mentioned
app.listen(PORT,()=>
{
    console.log(`server running on port ${PORT}`);
})

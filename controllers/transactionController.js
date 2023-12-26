const transactionModel=require('../models/transactionModel');
const moment=require('moment');
const getAllTransaction= async(req,res)=>{

    try{
        const {frequency,selectedDate,type}=req.body
        //wtever data is there , in that we will find that logged in user data only
        const transactions=await transactionModel.find({
              ...(frequency !== 'custom'?{
                //this query is executed if frequency type is custom
                date:{
                    //gt means greater than
                    //d means days
                    $gt:moment().subtract(Number(frequency),'d').toDate()
                },
              }:{
                //this below query is executed if frequency type is not custom
                date:{
                    //gte means greater than equal to
                    //d means days
                    $gte:selectedDate[0],
                    $lte:selectedDate[1]
                }
              }),
        userid:req.body.userid,
        //if type is not selected as all then wtever type we are gtng in body we will pass that there
        ...(type!=='all' && {type})

        });
        //sending all transactions we got
        res.status(200).json(transactions);
    }catch(error)
    {
        console.log(error);
        res.status(500).json(error);
    }
}



const editTransaction= async(req,res)=>
{
    try{
       await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
       res.status(200).send('Edit Successful');
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json(error);
    }
}


const deleteTransaction= async(req,res)=>
{
    try{
       await transactionModel.findOneAndDelete({_id:req.body.transactionId});
       res.status(200).send('Delete Successful');
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json(error);
    }
}

const addTransaction= async(req,res)=>{
    try{
       const newTransaction=new transactionModel(req.body)
       await newTransaction.save()
       res.status(201).send('Transaction Created')
    }catch(error)
    {
       console.log(error);
       res.status(500).json(error);
    }

}
module.exports={getAllTransaction,addTransaction,editTransaction,deleteTransaction};
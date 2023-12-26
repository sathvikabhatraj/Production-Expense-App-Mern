const express=require('express');
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactionController');


//creating router obj to perform routing
const router=express.Router();

//routes
//add transaction POST Method
router.post('/add-transaction',addTransaction)


//edit transaction
router.post('/edit-transaction',editTransaction)

//delete transaction
router.post('/delete-transaction',deleteTransaction)

//we are changing get transaction to post bcoz as we are passing userid in that
router.post('/get-transaction',getAllTransaction)

module.exports=router;
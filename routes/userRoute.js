const express=require('express');
const { loginController, registerController } = require('../controllers/userController');

//creating router obj to perform routing
const router=express.Router();

//routers
//POST route for login user
//instead of writing callback function after /login endpoint we will use controllers
router.post('/login',loginController)

//POST route for register user
router.post('/register',registerController)

module.exports=router;
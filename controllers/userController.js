const userModel = require("../models/userModel");
//login callback
const loginController = async (req, res) => {
  try {
    //destructuring
    const { email, password } = req.body;

    //waiting to check if credentials are rgt or not
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    //sending json response
    res.status(200).json({
        success:true,
        user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error
    });
  }
};

//register callback
const registerController = async(req,res) => 
{
    try
    {
        //we save as new document
       const newUser=new userModel(req.body)
       //waiting till new user is saved
       await newUser.save()
       res.status(201).json({
        success:true,
        newUser
       })

    }catch(error)
    {
        res.status(400).json({
            success: false,
            error
    })
}
};

//as we do multiple exports we are using  this{}
module.exports = { loginController, registerController };

const userModel=require('../models/UserModel');
const encrypt = require("../util/Encrypt");
const { generateToken } = require("../util/TokenValidation");

//create user
const createUser=async(req,res)=>{
    //ravikumar123

    //db.users.insert({data})
    const user ={
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserEmail: req.body.UserEmail,
        UserPass: encrypt.generatePassword(req.body.UserPass),
        role: req.body.role,
        status:req.body.status
    }
    try {
        const savedUser = await userModel.create(user);
        if (savedUser) {
            res.status(201).json({
                message: "User Created",
                data: savedUser
            })
        }
        else {
            res.status(500).json({
                message: "User not Created"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error in creating",
            error: error
        })
    }
}


//GET ALL
const getAllUser = async(req,res)=>{

    try{    
    const user = await userModel.find({status:true}).populate("role")
    if(user){
        res.status(200).json({
            data: user,
            message:"user fetched successfully"
        })
    }
    else
    {
        res.status(400).json({
            message: "User not fetched",
          });
    }
    }catch(err){
        res.staus(500).json({
            message: err.message
        })
    }
}
const getUserbyID=async(req,res)=>{
    try {
        const id=req.params.id;
        const user=await userModel.findById(id)
        if(user!=null || user!=undefined)
        res.status(200).json({
            message:"User Fetched successfully",
            data: user
        })
        else
        {
            res.status(404).json({
                message:"user not found"
            })
        }
        
    } catch (error) {
       res.status(500).json({
        message:"Server Error",
        error:error
       })
    }
}

//Update
const updateUser=async(req,res)=>{
    const id=req.params.id;
    const data={
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserEmail:req.body.UserEmail,
        UserPass: encrypt.generatePassword(req.body.UserPass),
        status:req.body.status
    }
    try{
    const userData= await userModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:userData,
            message:"user updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

//Delete
const deleteUser=async(req,res)=>{
    const id= req.params.id;
    try{
        const user = await userModel.findByIdAndDelete(id)
        if(user!=null || user!=undefined){
            res.status(200).json({
                data:user,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"user not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

//user login
const loginUser = async (req, res) => {
    const email = req.body.UserEmail;
    const password = req.body.UserPass;
    try {
        const user = await userModel.findOne({ UserEmail: email }).populate('role');
        if (user) {
            const flag = encrypt.comparePassword(password, user.UserPass);
            if (flag) {
                const token = generateToken(user.toObject());
                console.log("Token:- ", token);
                res.status(200).json({
                    message: "Login Successful",
                    data: token,
                    role: user.role.roleName
                })
            } else {
                res.status(404).json({
                    message: 'Invalid Password'
                })
            }
        } else {
            res.status(404).json({
                message: 'Email Not Found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        }) 
    }
}




module.exports={
    createUser,
    getAllUser,
    updateUser,
    getUserbyID,
    deleteUser,
    loginUser
}
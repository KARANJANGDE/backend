const adminModel=require('../models/AdminModel');
const encrypt = require("../util/Encrypt");
const { generateToken } = require("../util/TokenValidation");
//create user

const createAdmin=async(req,res)=>{

    //db.users.insert({data})
    const admin = {
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        AdminEmail:req.body.AdminEmail,
        AdminPass:encrypt.generatePassword(req.body.AdminPass),
        role:req.body.role,
        status:req.body.status
    }
    
    try {
        const savedAdmin=await adminModel.create(admin);
        if(savedAdmin){
            res.status(201).json({
                message:"Admin created Successfully",
                data:savedAdmin})
        }
        else {
            res.status(500).json({
                message: "Admin not Created"
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message:"Error Creating admin",
            error:err,
            
        })
    }
}


//GET ALL

const getAllAdmin = async(req,res)=>{

    try {
        const admins = await adminModel.find({status:true}).populate("role")
        if (admins) {
            res.status(200).json({
              message: "Admin fetched successfully",
              data: admins,
            });
          } else {
            res.status(400).json({
              message: "Admin not fetched",
            });
          }
    } catch (err) {
        res.status(500).json({
            message:err.message
        })
    }

}

const getadminbyid=async(req,res)=>{
    const id=req.params.id;
    try {
        const admin = await adminModel.findById(id).populate("role")
        if (admin) {
            res.status(200).json({
              message: "Admin fetched successfully",
              data: admin,
            });
          } else {
            res.status(400).json({
              message: "Admin not fetched",
            });
          }
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


//Update

const updateAdmin=async (req,res)=>{
    const id=req.params.id;
    const data={
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        AdminEmail:req.body.AdminEmail,
        AdminPass:encrypt.generatePassword(req.body.AdminPass),
        status:req.body.status
    }
    try{
    const adminData= await adminModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:adminData,
            message:"admin updated successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}


//Delete

const deleteAdmin=async(req,res)=>{
    const id= req.params.id;
    try{
    const admin = await adminModel.findByIdAndDelete(id)
        if(admin!=null || admin!=undefined){
            res.status(200).json({
                data:admin,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"Admin not found"
            })
        }

    }catch(err){
    res.status(500).json({
        message:"error deleting admin",
        error: err
    })
}
}

// admin login
const loginAdmin = async (req, res) => {
    const email = req.body.AdminEmail;
    const password = req.body.AdminPass;
    try {
        const admin = await adminModel.findOne({ AdminEmail: email }).populate('role');
        if (admin) {
            const flag = encrypt.comparePassword(password, admin.AdminPass);
            if (flag) {
                const token = generateToken(admin.toObject());
                //console.log("Token:- ", token);
                res.status(200).json({
                    message: "Login Successful",
                    data: {
                        //token: token, // Send the token
                        id: admin._id, // Include user's ID
                        role: admin.role.Name
                    },
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
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports={
    createAdmin,
    getAllAdmin,
    getadminbyid,
    updateAdmin,
    deleteAdmin,
    loginAdmin
}
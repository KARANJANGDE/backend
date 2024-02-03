const roleModel = require('../models/RoleModel')

const createRole=async(req,res)=>{

    //db.users.insert({data})
    const role = new roleModel(req.body)
    
    try {
        const savedRole=await role.save();
        if(savedRole){
            res.status(201).json({
                message:"Role created Successfully",
                data:savedRole            })
        }
    } catch(err) {
        res.status(500).json({
            message:"Error Creating Role",
            error:err
        })
    }
}

const updateRole=async(req,res)=>{
    const id=req.params.id;
    const data={
        Name:req.body.Name,
        status:req.body.status
    }
    try{
    const roleData= await roleModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:roleData,
            message:"role updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

const getAllRole = async(req,res)=>{

    try{
    const role= await roleModel.find({status:true})
        if(role)
        {
            res.status(200).json({
                data: role,
                message:"Role fetched successfully"
            })
        }
        else
        {
            res.status(400).json({
                message:"Role Not Found"
            })
        }

    }
    catch(err){
        res.staus(500).json({
            message: err.message
        })
    }
}

//deleterole
const deleteRole = async (req,res)=>{
    const id= req.params.id;
    try{
    const role = await roleModel.findByIdAndDelete(id)
   
        if(role!=null || role!=undefined){
            res.status(200).json({
                data:role,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"Role not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}
module.exports={
   createRole,
   updateRole,
   getAllRole,
   deleteRole
}
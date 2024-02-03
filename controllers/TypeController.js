const typeModel=require('../models/TypeModel')


//createType
const createType=async(req,res)=>{
    const type={
        TypeName:req.body.TypeName,
        status:req.body.status
    }
    try{
        const savedType=await typeModel.create(type)
        if(savedType){
            res.status(201).json({
                message:"Type Created",
                data:savedType
            })
        }
        else
        {
            res.status(500).json({
                message:"Type Not Created",
                data:savedType
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error Creating type",
            error:error
        })
    }
}

//updateType

const updateType=async(req,res)=>{
    const id=req.params.id;
    const data={
        TypeName:req.body.TypeName,
        status:req.body.status
    }
    try{
    const typeData= await typeModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:typeData,
            message:"type updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

//getallprojectType

const getAllType = async(req,res)=>{

    try{    
    const type = await typeModel.find({status:true})
    if(type){
        res.status(200).json({
            data: type,
            message:"Type fetched successfully"
        })
    }
    else
    {
        res.status(400).json({
            message: "Type not fetched",
          });
    }
    }catch(err){
        res.staus(500).json({
            message: err.message
        })
    }
}

//deleteprojectType

const deleteType=async(req,res)=>{
    const id= req.params.id;
    try{
        const type = await typeModel.findByIdAndDelete(id)
        if(type!=null || type!=undefined){
            res.status(200).json({
                data:type,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"Type not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

module.exports={
    createType,
    updateType,
    getAllType,
    deleteType
}
const equipmentModel=require('../models/EquipmentModel')


//Adding equipment 

const addEquipment=async(req,res)=>{

    //db.users.insert({data})
    
    
    try {
        const equipment = {
            Equipment:req.body.Equipment,
            Quantity:req.body.Quantity,
            ProjectID:req.body.ProjectID
        }
        const savedEquipment=await equipmentModel.create(equipment);
        if(savedEquipment){
            res.status(201).json({
                message:"Equipment Added Successfully",
                data:savedEquipment})
        }
        else {
            res.status(500).json({
                message: "Equipment not added"
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message:"Error Adding Equipment",
            error:err,
            
        })
    }
}

const getAllEquipmentByProjectID =async(req,res)=>{

    
    try {
        const {projectid}=req.params;
        const equipment=await equipmentModel.find({"ProjectID":projectid})//.populate("ProjectID")
        if(equipment)
        {
            res.status(200).json({
                data: equipment,
                message:"equipment fetched successfully"
            })
        }
        else
        {
            res.status(400).json({
                message:"equipment Not Found"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}



//getting all equipment 
const getAllEquipment = async(req,res)=>{

    try{
    const equipment= await equipmentModel.find({status:true}).populate("ProjectID")
        if(equipment)
        {
            res.status(200).json({
                data: equipment,
                message:"equipment fetched successfully"
            })
        }
        else
        {
            res.status(400).json({
                message:"equipment Not Found"
            })
        }

    }
    catch(err){
        res.staus(500).json({
            message: err.message
        })
    }
}

//updateEquipment
const updateEquipment=async(req,res)=>{
    const id=req.params.id;
    const data={
        EquipmentName:req.body.EquipmentName,
        Quantity:req.body.Quantity,
        status:req.body.status
    }
    try{
    const equipmentData= await equipmentModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:equipmentData,
            message:"equipment updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}
//deleteEquipment
const removeEquipment = async (req,res)=>{
    const id= req.params.id;
    try{
    const equipment = await equipmentModel.findByIdAndDelete(id)
   
        if(equipment!=null || equipment!=undefined){
            res.status(200).json({
                data:equipment,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"equipment not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}
module.exports={
    addEquipment,
    getAllEquipment,
    getAllEquipmentByProjectID,
    updateEquipment,
    removeEquipment
}
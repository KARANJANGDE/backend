const projectModel=require('../models/ProjectModels')



const createProject=async(req,res)=>{
    
    try{
        // const project={
        //     ProjectName:req.body.ProjectName,
        //     StartDate:req.body.StartDate,
        //     EndDate:req.body.EndDate,
        //     City:req.body.City,
        //     State:req.body.State,
        //     Country:req.body.Country,
        //     Latitude:req.body.Latitude,
        //     Longitude:req.body.Longitude,
        //     type:req.body.type,
        //     status:req.body.status
        // }
        const savedProject=await projectModel.create(req.body)
        
        if(savedProject){
            res.status(201).json({
                message:"Project Created",
                data:savedProject
            })
        }
        else
        {
            res.status(500).json({
                message:"Project Not Created",
                data:savedProject
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error Creating Project",
            error:error
        })
    }
}

//getAllProject

const getAllProject = async(req,res)=>{

    try{    
    const project = await projectModel.find({status:true}).populate("type")
    if(project){
        res.status(200).json({
            data: project,
            message:"project fetched successfully"
        })
    }
    else
    {
        res.status(400).json({
            message: "project not fetched",
          });
    }
    }catch(err){
        res.staus(500).json({
            message: err.message
        })
    }
}

const getProjectByID=async(req,res)=>{
   try {
    
    const id=req.params.id;
    const project=await projectModel.findById(id)
    if(project!=null || project!=undefined)
    {
        res.status(200).json({
            message:"Project Fetched successfully",
            data: project
        })
    }
    else
    {
        res.status(404).json({
            message:"Project not found"
        })
    }
   } catch (error) {
    res.status(500).json({
        message: "Server Error",
        error:error
    })
   }
}
//Update
const updateProject=async(req,res)=>{
    const id=req.params.id;
    const data={
        ProjectName:req.body.ProjectName,
        StartDate:req.body.StartDate,
        EndDate:req.body.EndDate,
        City:req.body.City,
        State:req.body.State,
        Country:req.body.Country,
        Latitude:req.body.Latitude,
        Longitude:req.body.Longitude,
        status:req.body.status
    }
    try{
    const projectData= await projectModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:projectData,
            message:"project updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

//deleteProject

const deleteProject = async (req,res)=>{
    const id= req.params.id;
    try{
    const project = await projectModel.findByIdAndDelete(id)
   
        if(project!=null || project!=undefined){
            res.status(200).json({
                data:project,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"Project not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

module.exports={
    createProject,
    getAllProject,
    updateProject,
    getProjectByID,
    deleteProject

}
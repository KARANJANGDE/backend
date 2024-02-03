const taskModel=require('../models/TaskModel')

//createtask
const createTask=async(req,res)=>{
    const task={
        StartDate:req.body.StartDate,
        EndDate:req.body.EndDate,
        ProjectID:req.body.ProjectID,
        TimePeriod:req.body.TimePeriod,
        status:req.body.status
    }
    try{
        const savedTask=await taskModel.create(task)
        if(savedTask){
            res.status(201).json({
                message:"Task Created",
                data:savedTask
            })
        }
        else
        {
            res.status(500).json({
                message:"Task Not Created",
                data:savedTask
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error Creating task",
            error:error
        })
    }
}

//getalltask
const getAllTask = async(req,res)=>{

    try{    
    const task = await taskModel.find({status:true}).populate("ProjectID")
    if(task){
        res.status(200).json({
            data: task,
            message:"Task fetched successfully"
        })
    }
    else
    {
        res.status(400).json({
            message: "Task not fetched",
          });
    }
    }catch(err){
        res.staus(500).json({
            message: err.message
        })
    }
}

//updatetask

const updateTask=async(req,res)=>{
    const id=req.params.id;
    const data={
        StartDate:req.body.StartDate,
        EndDate:req.body.EndDate,
        ProjectID:req.body.ProjectID,
        TimePeriod:req.body.TimePeriod,
        status:req.body.status
    }
    try{
    const taskData= await taskModel.findByIdAndUpdate(id,data)
        res.status(200).json({
            data:taskData,
            message:"task updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}
const deleteTask=async(req,res)=>{
    const id= req.params.id;
    try{
        const task = await taskModel.findByIdAndDelete(id)
        if(task!=null || task!=undefined){
            res.status(200).json({
                data:task,
                message:"Deleted Successfully"
            })
        }
        else
        {
            res.status(404).json({
                message:"task not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
}
}

module.exports={
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}
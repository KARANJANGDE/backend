const statusModel=require('../models/ProjectStatusModel')

const createStatus=async(req,res)=>{
    try {

        const status={
            Project:req.body.Project,
            statuses:req.body.statuses
        }
        const savedStatus=await statusModel.create(status)
        if(savedStatus!==null || savedStatus!==undefined)
        {
            res.status(201).json({
                message:"Status Added Successfully",
                data:savedStatus
            })
        }
        else
        {
            res.status(404).json({
                message:"Status not added"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}

const getallstatus=async(req,res)=>{
    try {
        const status=await statusModel.find().populate("Project")
        if(status!==null||status!==undefined)
        {
            res.status(200).json({
                message:"Status fetched successfully",
                data:status
            })
        }
        else
        {
            res.status(404).json({
                message:"Status not fetched"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}

const getStatusByID = async(req, res)=>{
    try {
        const id=req.params.id
        const status=await statusModel.findById(id).populate("Project")
        if(status!==null||status!==undefined)
        {
            res.status(200).json({
                message:"Status fetched successfully",
                data:status
            })
        }
        else
        {
            res.status(404).json({
                message:"Status not fetched"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}

const updatestatus=async(req,res)=>{
    try {
        const id=req.params.id;
        const data={
            Project:req.body.Project,
            statuses:req.body.statuses
        }

        const status=await statusModel.findByIdAndUpdate(id,data)
        if(status!==null||status!==undefined)
        {
            res.status(200).json({
                message:"Status Updated Successfully",
                data:status
            })
        }
        else
        {
            res.status(404).json({
                message:"Status not Updated"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}

const deleteStatus=async(req,res)=>{
    try {

        const status=await statusModel.findByIdAndDelete(req.params.id)
        if(status!==null||status!==undefined)
        {
            res.status(200).json({
                message:"Status Deleted Successfully",
                data:status
            })
        }
        else
        {
            res.status(404).json({
                message:"Status not Deleted"
            })
        }
        

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}

module.exports = {
    createStatus,
    getallstatus,
    getStatusByID,
    updatestatus,
    deleteStatus    
}
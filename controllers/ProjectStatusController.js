const statusModel=require('../models/ProjectStatusModel')

const createStatus=async(req,res)=>{
    try {

        const savedStatus=await statusModel.create(req.body)
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
        const id=req.params.id;
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
        console.log(error);
        res.status(500).json({
            message:"server error",
            error:error,
            
        })
    }
}


const getstatusbyprojectid=async(req,res)=>{
    try {
        const {projectid}=req.params;
        const status=await statusModel.find({"Project":projectid}).populate("Project")
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

const getStatusByProjectAndStatus = async(req, res) => {
    try {
        const { projectid, status } = req.params; // Assuming you're passing status as a URL parameter now
        // Adjust the query to filter by the provided status, considering case sensitivity
        const statuses = await statusModel.find({
            "Project": projectid,
            "status": { $regex: new RegExp("^" + status + "$", "i") } // This makes the status check case-insensitive
        }).populate("Project");

        if (statuses.length > 0) {
            res.status(200).json({
                message: `${status} statuses fetched successfully`,
                data: statuses
            });
        } else {
            res.status(404).json({
                message: `No ${status} statuses found for the specified project`
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error
        });
    }
}


const updatestatusbyID=async(req,res)=>{
    try {
        const id=req.params.id;
        const data={
            status:req.body.status,
        }
     
        const findstatus=await statusModel.findByIdAndUpdate(id,data);
       
        if(findstatus)
        {
            res.status(200).json({
                message:"Status Updated Successfully",
                data:findstatus
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
    getstatusbyprojectid,
    getStatusByID,
    updatestatusbyID,
    getStatusByProjectAndStatus,
    deleteStatus    
}
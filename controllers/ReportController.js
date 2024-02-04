const reportModel=require('../models/ReportModel');
const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./reports/');
    },
    filename:(req,file,cb)=>{
    cb(null,file.fieldname);
    }
})

const upload=multer({
    storage:storage
}).single('report')


const addReport=(req,res)=>{
    try {
        upload(req,res,async(err)=>{
            if(err)
            {
                res.status(400).json({
                    message:"Error adding report",
                    error:err
                })
            }
            else
            {
                console.log(4)
                const report={
                    ReportDate:req.body.ReportDate,
                    Description:req.body.Description,
                    ReportURL:req.file.path,
                    ProjectID:req.body.ProjectID
                }
                const savedReport=await reportModel.create(report)
                if(savedReport)
                {
                    res.status(201).json({
                        message:"Report Added Successfully",
                        data:savedReport
                    })
                }
                else
                {
                    res.status(404).json({
                        message:"Report Not Added"
                    })
                }
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}

const getAllReport=async(req,res)=>{
    try {
        const savedReport=await reportModel.find().populate('ProjectID')
        if(savedReport)
        {
            res.status(200).json({
                message:"Report fetched successfully",
                data:savedReport
            })
        }
        else
        {
            res.status(404).json({
                message:"Report not fetched"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}

const deleteReport=async(req,res)=>{
    try {
        const deletedReport=await reportModel.findByIdAndDelete(req.params.id)
        if(deletedReport)
        {
            res.status(200).json({
                message:"Report deleted successfully",
                data:deletedReport
            })
        }
        else
        {
            res.status(404).json({
                message:"Report not deleted"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}



module.exports={
    addReport,
    getAllReport,
    deleteReport
}
const documentModel=require("../models/DocumentModel")

const addDocument=async(req,res)=>{
    try {

        const document={
            DocumentName:req.body.DocumentName,
            DocumentType:req.body.DocumentType,
            FilePath:req.body.FilePath,
            ProjectID:req.body.ProjectID,
            status:req.body.status
        }
        const savedDocument=await documentModel.create(document)
        if(savedDocument)
        {
            res.status(201).json({
                message:"Document Added Successfully",
                data:savedDocument
            })
        }
        else
        {
            res.status(404).json({
                message:"Document Not Added"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}

const getAllDocument=async(req,res)=>{

    try {
        const savedDocument=await documentModel.find().populate('ProjectID')
        if(savedDocument)
        {
            res.status(200).json({
                message:"Document fetched successfully",
                data:savedDocument
            })
        }
        else
        {
            res.status(404).json({
                message:"Document not fetched"
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
    addDocument,
    getAllDocument
}
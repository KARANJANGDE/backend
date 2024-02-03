const documentModel=require("../models/DocumentModel")
const multer =require("multer");

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/');
    },
    filename:(req,file,cb)=>{
    cb(null,file.fieldname);
    }
})

const upload=multer({
    storage:storage,
    //limits:{fileSize:10000000 }//infile size 1mb
}).single('document')

const addDocumentInUpload=(req,res)=>{
    try {

        upload(req,res,async(err)=>{
            if(err){
                res.status(400).json({
                    message:"Error adding document",
                    error:err
                })
            }
            else
            {
                const document={
                    DocumentName:req.body.DocumentName,
                    DocumentType:req.body.DocumentType,
                    FilePath:req.file.path,
                    ProjectID:req.body.ProjectID,
                    status:req.body.status
                }
                 const savedDocument=await documentModel.create(document)
                //const savedDocument=await document.save()
                if(savedDocument)
                {
                    console.log("6")
                    res.status(201).json({
                        message:"Document Added Successfully",
                        data:savedDocument
                    })
                }
                else{
                    res.status(404).json({
                        message:"Document Not Added"
                    })
                }
            }
        })
        
    } catch (error) {
        console.log(error)
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

const deleteDocument=async(req,res)=>{
    try {
        const deletedDocument=await documentModel.findByIdAndDelete(req.params.id)
        if(deletedDocument)
        {
            res.status(200).json({
                message:"Document deleted successfully",
                data:deletedDocument
            })
        }
        else
        {
            res.status(404).json({
                message:"Document not deleted"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error",
            error:error
        })
    }
}

const updateDocument=async(req,res)=>{
    try {
        upload(req,res,async(err)=>{
            if(err)
            {
                res.status(400).json({
                    message:"Error updating document",
                    error:err
                })
            }
            else
            {
                const document={
                    DocumentName:req.body.DocumentName,
                    DocumentType:req.body.DocumentType,
                    FilePath:req.file.path,
                    ProjectID:req.body.ProjectID,
                    status:req.body.status
                }
                const updatedDocument=await documentModel.findByIdAndUpdate(req.params.id,document,{new:true})
                if(updatedDocument)
                {
                    res.status(200).json({
                        message:"Document updated successfully",
                        data:updatedDocument
                    })
                }
                else
                {
                    res.status(404).json({
                        message:"Document not updated"
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
module.exports={

    addDocumentInUpload,
    getAllDocument,
    deleteDocument,
    updateDocument

}
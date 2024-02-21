const comModel=require('../models/CommunicationModel');
const adminModel=require('../models/AdminModel');
const mailUtil=require('../util/MailUtil');

const requestCommunication=async(req,res)=>{
    try {

        const com={
            AdminID:req.body.AdminID,
            UserID:req.body.UserID,
            ComDate:req.body.ComDate,
            Inquiry:req.body.Inquiry,
            status:req.body.status
        }

        const savedCom=await comModel.create(com);
        const query= await adminModel.findById(req.body.AdminID);
        console.log(query);

        mailUtil.sendMail(query.AdminEmail,"Inquiry","Inquiry Issue Details:"+req.body.Inquiry);
        if(savedCom){
            res.status(201).json({
                message:"Communication created Successfully",
                data:savedCom})
        }else{
            res.status(500).json({
                message:"Communication not created"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error

        })
    }
}

const getCommunication=async(req,res)=>{
    try {
        const com=await comModel.find().populate('AdminID').populate('UserID');
        if(com){
            res.status(200).json({
                message:"Communication fetched Successfully",
                data:com})
        }else{
            res.status(500).json({
                message:"Communication not fetched"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error

        })
    }
}

const deleteCommunication=async(req,res)=>{
    try {
        const com=await comModel.findByIdAndDelete(req.params.id);
        if(com){
            res.status(200).json({
                message:"Communication deleted Successfully",
                data:com})
        }else{
            res.status(500).json({
                message:"Communication not deleted"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error

        })
    }
}

module.exports={
    requestCommunication,
    getCommunication,
    deleteCommunication
}
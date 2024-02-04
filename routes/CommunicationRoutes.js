const router =require('express').Router();
const comController=require('../controllers/CommunicationController');
router.post("/com",comController.requestCommunication);
router.get("/com",comController.getCommunication);
router.delete("/com/:id",comController.deleteCommunication);
module.exports=router;
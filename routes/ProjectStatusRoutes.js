const router=require('express').Router();
const statusController=require('../controllers/ProjectStatusController')
router.post("/status",statusController.createStatus);
router.get("/status",statusController.getallstatus);
router.get('/status/project/:projectid/:status', statusController.getStatusByProjectAndStatus);
router.get("/status/:projectid",statusController.getstatusbyprojectid);
router.get("/status/:id",statusController.getStatusByID);
router.put("/status/:id",statusController.updatestatusbyID);
router.delete("/status/:id",statusController.deleteStatus);
module.exports=router;
const router=require('express').Router();
const statusController=require('../controllers/ProjectStatusController')
router.post("/status",statusController.createStatus);
router.get("/status",statusController.getallstatus);
router.get("/project/:projectid/statuses/:statusid",statusController.getStatusByID);
router.put("/project/:projectid/statuses/:statusid",statusController.updatestatusbyID);
router.delete("/status/:id",statusController.deleteStatus);
module.exports=router;
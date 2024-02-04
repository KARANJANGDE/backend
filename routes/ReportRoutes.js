const router=require('express').Router()
const reportController=require('../controllers/ReportController')
router.post("/report",reportController.addReport);
router.get("/report",reportController.getAllReport);
router.delete("/report/:id",reportController.deleteReport);
module.exports=router;
const adminController =require('../controllers/AdminController');
const router=require('express').Router();
router.post("/Admin",adminController.createAdmin)
router.get("/Admin",adminController.getAllAdmin)
router.get("/admin/:id",adminController.getadminbyid)
router.put("/Admin/:id",adminController.updateAdmin)
router.delete("/Admin/:id",adminController.deleteAdmin)
router.post("/Admin/login",adminController.loginAdmin)
module.exports=router;
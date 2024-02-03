const roleController=require('../controllers/RoleController');
const router=require('express').Router();
router.post("/role",roleController.createRole)
router.get("/role",roleController.getAllRole)
router.put("/role/:id",roleController.updateRole)
router.delete("/role/:id",roleController.deleteRole)
module.exports=router;
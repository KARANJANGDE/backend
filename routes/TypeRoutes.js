const typeController=require('../controllers/TypeController')
const router=require('express').Router();
router.post("/type",typeController.createType);
router.get("/type",typeController.getAllType);
router.put('/type/:id',typeController.updateType)
router.delete("/type/:id",typeController.deleteType);
module.exports=router;
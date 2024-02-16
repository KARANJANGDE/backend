const equipmentController=require('../controllers/EquipmentController');
const router=require('express').Router();
router.post('/equipment',equipmentController.addEquipment);
router.get('/equipment',equipmentController.getAllEquipment);
router.put('/equipment/:id',equipmentController.updateEquipment);
router.get('/project/:projectid',equipmentController.getAllEquipmentByProjectID);
router.delete('/equipment/:id',equipmentController.removeEquipment);
module.exports=router;
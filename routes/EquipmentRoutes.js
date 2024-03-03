const equipmentController=require('../controllers/EquipmentController');
const router=require('express').Router();
router.post('/equipment',equipmentController.addEquipment);
router.get('/equipment',equipmentController.getAllEquipment);
router.get('/equipment1/:id',equipmentController.getEquipmentByid);
router.put('/equipment/:id',equipmentController.updateEquipment);
router.get('/equipment/:projectid',equipmentController.getAllEquipmentByProjectID);
router.delete('/equipment/:id',equipmentController.removeEquipment);
module.exports=router;
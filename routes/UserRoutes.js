const userController = require('../controllers/UserController');
const router=require('express').Router();
router.post("/User",userController.createUser)
router.get("/User",userController.getAllUser)
router.get('/User/:id',userController.getUserbyID)
router.put("/User/:id",userController.updateUser)
router.delete("/User/:id",userController.deleteUser)
router.post("/User/login",userController.loginUser)
module.exports=router;
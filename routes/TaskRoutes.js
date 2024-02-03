const taskController = require('../controllers/TaskController')
const router=require('express').Router();
router.post("/task",taskController.createTask);
router.get("/task",taskController.getAllTask);
router.put("/task/:id",taskController.updateTask);
router.delete("/task/:id",taskController.deleteTask);
module.exports=router;

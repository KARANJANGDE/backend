const projectController=require('../controllers/ProjectController')
const router=require('express').Router();
router.post("/project",projectController.createProject);
router.delete("/project/:id",projectController.deleteProject);
router.get("/project",projectController.getAllProject);
router.put("/project/:id",projectController.updateProject);
module.exports=router;

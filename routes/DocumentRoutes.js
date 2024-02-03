const docController=require("../controllers/DocumentController")
const router=require('express').Router();
router.post("/document",docController.addDocument);
router.get("/document",docController.getAllDocument);
module.exports=router;
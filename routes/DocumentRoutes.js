const docController=require("../controllers/DocumentController")
const router=require('express').Router();
router.post("/document",docController.addDocument);
router.post("/documentinupload",docController.addDocumentInUpload);
router.get("/document",docController.getAllDocument);
module.exports=router;
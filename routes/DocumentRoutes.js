const docController=require("../controllers/DocumentController")
const router=require('express').Router();
router.post("/document",docController.addDocumentInUpload);
router.get("/document",docController.getAllDocument);
router.delete("/document/:id",docController.deleteDocument);
router.put("/document/:id",docController.updateDocument);
module.exports=router;
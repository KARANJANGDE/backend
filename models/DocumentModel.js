const mongoose=require('mongoose');
const Schema=mongoose.Schema

const documentSchema=new Schema({
    DocumentName:{
        type:String,
        required:true
    },
    DocumentType:{
        type:String,
    },
    FilePath:{
        type:String,
    },
    ProjectID:{
        type:Schema.Types.ObjectId,
        ref:'project'
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model("document",documentSchema);
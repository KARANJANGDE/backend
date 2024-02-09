const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const statusSchema=new Schema({
    ProjectWork:{
        type:String,
    },
    ProjectID:{
        type:Schema.Types.ObjectId,
        ref:'project'
    },
    status:{
        type:String,
        enum:["Pending","Done","NotStarted"]
    }
})

module.exports=mongoose.model("status",statusSchema);
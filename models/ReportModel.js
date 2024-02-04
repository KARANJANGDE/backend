const mongoose=require('mongoose');
const Scehma=mongoose.Schema;

const reportSchema=new Scehma({
    ReportDate:{
        type:Date,
        default:Date.now
    },
    Description:{
        type:String,
        unique:true
    },
    ReportURL:{
        type:String
    },
    ProjectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'project'
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model("report",reportSchema);
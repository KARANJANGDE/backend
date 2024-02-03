const mongoose=require("mongoose");
const Schema=mongoose.Schema; 

const taskSchema=new Schema({
    StartDate:{
        type: Date,
    },
    EndDate:{
        type:Date,
    },
    ProjectID:{
        type:Schema.Types.ObjectId,
        ref:"project"
    },
    TimePeriod:{
        type:String,
    },
    status:{
        type: Boolean,
        default: true
    }
})

module.exports=mongoose.model("task",taskSchema);
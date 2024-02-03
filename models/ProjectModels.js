const mongoose=require("mongoose");
const Schema=mongoose.Schema;//creation object of schema class

const projectSchema=new Schema({
    ProjectName:{
        type:String,
    },
    StartDate:{
        type:Date,
    },
    EndDate:{
        type:Date,
    },
    City:{
        type:String,
    },
    State:{
        type:String,
    },
    Country:{
        type:String,
    },
    Latitude:{
        type:String,
    },
    Longitude:{
        type:String,
    },
    type:{
        type:Schema.Types.ObjectId,
        ref:"type"
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports=mongoose.model("project",projectSchema);  //exporting the model
const mongoose=require('mongoose');
const Schema =mongoose.Schema;//creation object of schema class


const equipmentSchema=new Schema({
    Equipment:[{
        name:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            default:true
        }
    }],
    Quantity:{
        type:Number,
    },
    ProjectID:{
        type:Schema.Types.ObjectId,
        ref:"project"
    }
})

module.exports=mongoose.model("equipment",equipmentSchema); //exporting the model
const mongoose=require('mongoose');
const Schema =mongoose.Schema;//creation object of schema class


const equipmentSchema=new Schema({
    EquipmentName:{
        type:String,
    },
    Quantity:{
        type:Number,
    },
    ProjectID:{
        type:Schema.Types.ObjectId,
        ref:"project"
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model("equipment",equipmentSchema); //exporting the model
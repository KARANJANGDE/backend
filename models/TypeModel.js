const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const typeSchema=new Schema({
    TypeName:{
        type:String,
        enum:['Residential','Commercial','Rental'],
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports=mongoose.model("type",typeSchema);
const mongoose=require("mongoose");
const Schema = mongoose.Schema; //creation object of schema class


const roleSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports=mongoose.model("role",roleSchema); //exporting the model
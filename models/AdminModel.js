const mongoose=require("mongoose");
const Schema = mongoose.Schema; //creation object of schema class

const adminSchema=new Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String,
    },
    AdminEmail:{
        type:String,
        unique:true
    },
    AdminPass:{
        type:String,
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:"role"
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports=mongoose.model("Admin",adminSchema); //exporting the model
const mongoose=require("mongoose");
const Schema = mongoose.Schema; //creation object of schema class

const userSchema=new Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String,
    },
    UserEmail:{
        type:String,
    },
    UserPass:{
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
module.exports=mongoose.model("User",userSchema); //exporting the model
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const comScehma=new Schema({
    // AdminID:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Admin'
    // },
    UserID:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    ComDate:{
        type:Date,
        default:Date.now
    },
    Inquiry:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model("communication",comScehma);
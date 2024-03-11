const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const statusSchema=new Schema({

        Project:{
            type:Schema.Types.ObjectId,
            ref:'project'
        },
    
        name:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["Pending","Done","NotStarted"],
            default:"NotStarted"
        },

});

module.exports=mongoose.model("status",statusSchema);
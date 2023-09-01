const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    status:{type:Boolean,default:true},
    title:{type:String,required:true},
    textArea:{type:String,required:true},
    comments:
    [
        {
            status:{type:Boolean,default:true},
            text:{type:String}
        }
    ]
})

module.exports = mongoose.model("Post",postSchema)
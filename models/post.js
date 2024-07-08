const mongoose = require("mongoose")

 const postSchema = new mongoose.Schema({
    
    title:{
        type : String,
        required: true
    },
    body:{
        type: String,
        required : true
    },
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Likes"
    }]
})
module.exports = mongoose.model("Post",postSchema)
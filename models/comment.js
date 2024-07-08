const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({

    user:{
        type:String,
        required:true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    comment:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("Comment",CommentSchema)
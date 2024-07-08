const Post = require("../models/post")

exports.getPost = async(req,res)=>{
    try{

        const getdata = await Post.find().populate("likes").populate("comments").exec()
        res.json({
            message:getdata
    
        })
    }
    catch(err){
        res.json({
            message: console.log(err)
        })
    }
   
}
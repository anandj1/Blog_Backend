const Post = require("../models/post")

exports.createPost = async(req,res)=>{
    try{
        const{title,body}= req.body;
        const newPost = await Post.create({title,body})
        res.json({
            success: true,
            post: newPost
        })
    }
    catch(err){
        res.status(400).json({
            message: console.log(err)

        })

    }
}
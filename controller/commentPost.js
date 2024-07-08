const Post = require("../models/post")
const Comment = require("../models/comment")

exports.commentPost = async(req,res)=>{
    try{
        const{user,post,comment}= req.body

        const comments = new Comment({
            user,post,comment
        })

        const savedComment = await comments.save()
        const UpdatedPost = await Post.findByIdAndUpdate(post,{
            $push:{comments : savedComment._id}
        },{new:true})
        .populate("comments")
        .exec();

        res.json({
            post:UpdatedPost
        })
    }
    catch(err){
        res.json({
            message:"Error while ftehcing data"
        })
    }
}
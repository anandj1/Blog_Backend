const Post = require("../models/post")
const Likes = require ("../models/likes")

exports.likePost = async(req,res)=>{
    try{

        const{post,user} = req.body
        const liked = await Likes.create({post,user})
    
        const UpdatePost = await Post.findByIdAndUpdate(post,
           {$push:{likes:liked._id}},
           {new:true})
           .populate("likes")
           .exec()
    
           res.json({
            post:UpdatePost
           })
    }
    catch (err) {
        return res.status(500).json({
          error: "Error While Like Post",
        });
      }
}


      // Unlike a post

      exports.unlikePost = async(req,res)=>{

        try{

            const{post,liked} = req.body

            const deleteLike = await Likes.findOneAndDelete({post:post, _id:liked})
            if (!deleteLike) {
                return res.status(404).json({
                  success: false,
                  message: "Like not found"
                });
              }
              if(deleteLike){
                res.json({
                    success:true,
                    message:"Like deleted"
                })
              }
            const UpdatedPosts = await Post.findOneAndUpdate(post,
                {$pull :{likes: deleteLike._id}},
                {new:true}
            )
            res.json({
                post:UpdatedPosts
            })
        }
       catch(err){
        res.json({
            message: console.log(err)

        })
       }

      }

   



const express = require("express");
const router = express.Router();

const{createPost} = require("../controller/createPost")
const{commentPost} = require("../controller/commentPost")
const{getPost} = require("../controller/getPost")
const{likePost,unlikePost} = require("../controller/likePost")




// Mapping
router.post("/post/CreatePost",createPost)
router.post("/comments/create",commentPost)
router.get("/posts",getPost)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)



module.exports= router;
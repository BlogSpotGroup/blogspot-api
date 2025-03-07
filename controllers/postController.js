//============================== CREATE NEW POST
// POST : api/posts/
// PROTECTED

const createPost = async(req, res, next) => {
    res.json("Create Post")
}



//============================== GET ALL POSTS
// GET : api/posts/
// UNPROTECTED
const getPosts = async(req, res, next) => {
    res.json("Get all posts")
}

//============================== GET SINGLE POSTS
// GET : api/posts/:id
// UNPROTECTED

const getPosts = async(req, res, next) => {
    res.json("Get single post")
}


//============================== GET POSTS BY CATEGORY
// GET : api/posts/categories/:category
// UNPROTECTED

const createPost = async(req, res, next) => {
    res.json("Create Post")
}



//============================== GET POSTS BY AUTHOR
// GET : api/posts/users/:id
// UNPROTECTED

const createPost = async(req, res, next) => {
    res.json("Create Post")
}



//============================== EDIT POST
// PATCH : api/posts/:id
// PROTECTED

const createPost = async(req, res, next) => {
    res.json("Create Post")
}




//============================== DELETE POST
// DELETE : api/posts/:id
// PROTECTED

const createPost = async(req, res, next) => {
    res.json("Create Post")
}


module.exports = {getPosts, getPost, getCatPosts, getUserPosts, createPost, editPost, removePost, deletePost}
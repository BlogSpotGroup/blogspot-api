const {Router} = require('express');

const {createPost, getPosts, getPost, getCatPosts, getUserPosts, editPost, removeEventListener} = ('../controllers/postControllers')

const authMiddleware = require('../middleware/authMiddleware')

const router = Router();



router.post('/', )

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.patch('/:id', authMiddleware, editPost);
router.delete('/:id', authMiddleware, removePost);
router.get('/categories/:category', getCatPosts)
router.get('/users/:id', getUserPosts)


module.exports = router; 
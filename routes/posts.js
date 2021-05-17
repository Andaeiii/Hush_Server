import express from 'express';

const router = express.Router();
import { getPosts, createPost, updatePost } from '../controllers/posts.js'; //always add.js, in react you dont need to, but in node you have to.

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)  //patch is used to update existing posts...


export default router;
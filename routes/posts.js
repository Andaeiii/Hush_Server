import express from 'express';

const router = express.Router();
import { getPosts, createPost } from '../controllers/posts.js'; //always add.js, in react you dont need to, but in node you have to.

router.get('/', getPosts);
router.post('/', createPost);


export default router;
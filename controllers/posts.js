//import models..
import PostModel from '../models/PostModel.js';



export const getPosts = async (req, res) => {

    try {
        //res.send('This Works...'); //sending custom output...
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        req.status(409).json({ message: error.message });
    }
}



//import models..
import mongoose from 'mongoose';
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

//post/123
export const updatePost = async (req, res) => {
    const { id: _id } = req.params; //rename the ' id ' to ' _id '
    const post = req.body;          //get the updated from the body.. 

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id..'); // if id is valid... 

    const newPostObj = { ...post, _id }; //pass the id to the new post obj..
    const updatedPost = await PostModel.findByIdAndUpdate(_id, newPostObj, { new: true }) // new - to receive the updated post... 

    res.json(post);

}

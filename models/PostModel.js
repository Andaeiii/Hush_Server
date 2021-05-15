import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],     //array of type string
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});


const PostModel = mongoose.model('PostModel', PostSchema);
export default PostModel;


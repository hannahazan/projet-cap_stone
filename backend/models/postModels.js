import mongoose from 'mongoose';
import User from './usersModel.js'

const postSchema = new mongoose.Schema({
    userPseudo:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    body:String
    })
    
const Post = mongoose.model('Post',postSchema);


export default Post;
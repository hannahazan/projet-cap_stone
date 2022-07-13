import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
nom:String,
prénom:String,
rna:Number,
pseudo:String,
email:String,
password:String,
isAssociation:Boolean,
})

const User = mongoose.model('users', userSchema);

export default User;
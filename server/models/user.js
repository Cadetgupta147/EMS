import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, requird: true},
    email: {type: String, required: true},
    profilePicture: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    role: {type: String, enum: ['user','admin']}
})

const user = mongoose.model('User', userSchema);

export default user; 
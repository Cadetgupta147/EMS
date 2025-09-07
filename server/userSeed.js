import User from './models/user.js';
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
    await connectToDatabase();
    try {
        const hashPassword = await bcrypt.hash('admin123',10)
        const newUser = new User({
            username:'Admin',
            password:hashPassword,
            email: 'admin@123',
            profilePicture: '../assets/images/photo.jpg',
            role: 'admin'
        })
        await newUser.save();
        console.log('Admin user created');
    } catch (error) {
        console.log(error);
    }
}

userRegister();
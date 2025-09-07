import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req,res) =>{
    try {
      const {email, password} = req.body;
      if(email == ''){
          return res.status(400).json({error: "Enter the email"});
      }
      if(password == ''){
          return res.status(400).json({error: "Enter the password"});
      }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error: "User not found"});
        }
        const isMatches = await bcrypt.compare(password, user.password);
        if(!isMatches){
            return res.status(401).json({error: "Invalid credentials"});
        }

        const token = jwt.sign(
            {_id: user._id, role: user.role},
            process.env.JWT_KEY,
            {expiresIn: '1d'}
        )
        res.status(200).json({
            success: true,
            message: "Login successful", 
            token,
            user: {_id: user._id, 
            username: user.username, 
            email: user.email, 
            role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const verify = async (req,res) => {
    return res.status(200).json({success: true, user: req.user})
}
export {login, verify}
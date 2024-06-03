import User from '../models/user.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup = async(req,res,next) => {
  const{username,email,password} = req.body
  const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

  const hashedPassword = bcryptjs.hashSync(password,10)
  const newUser = new User({username,email,password:hashedPassword})
  try{
    await newUser.save()
    res.status(201).json("User created successful")
  }catch(error){
    next(error)
  }
}
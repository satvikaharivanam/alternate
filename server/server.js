

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserSchema from "./userSchema.js" // adjust path as needed


dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("thankfuck"))
.catch(err => console.log(err))


const User = mongoose.model("User",UserSchema)

//this is for signup 
app.post("/api/signup", async (req, res) => {
  try {
    console.log("Received signup data:", req.body); // 👈 see what frontend sends

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const UserAlready = await User.findOne({ email });
    if (UserAlready) {
      return res.status(400).json({ message: "Email already there" });
    }

    const hashedpass = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedpass });
    await newUser.save();

    res.json({ message: "done!!" });
  } catch (err) {
    console.error("Signup error:", err); // 👈 see the exact backend error
    res.status(500).json({ message: err.message });
  }
});


//this is for login

app.post("/api/login" , async (req,res)=>{
 try{
  const {username, password} = req.body

  const user = await User.findOne({username})
  if(!user) return res.status(400).json({message:"User not there"})

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({message:"invalid password"})

      const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: "1h"})

      res.json({message:"success",token})
 }catch(err){
  res.status(500).json({message: err.message})
 }
})
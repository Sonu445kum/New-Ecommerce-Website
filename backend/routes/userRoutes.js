const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {protect} = require("../middleware/authMiddleware")
require("dotenv").config(); // Ensure environment variables are loaded

const router = express.Router();

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
    // console.log("Request Body:", req.body); // Debugging log
    const { name, email, password } = req.body;
    try {
       

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        user = new User({ name, email, password });
        await user.save();

        // Create JWT payload
        const payload = { user: { id: user._id, role: user.role } };

        // Debugging: Check if JWT_SECRET is loaded
        // console.log("JWT Secret:", process.env.JWT_SECRET);

        // Sign and return the token along with user details
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
            (err, token) => {
                if (err) {
                    console.error("JWT Signing Error:", err);
                    return res.status(500).json({ message: "Token generation failed" });
                }
                res.status(201).json({
                    message:"Register successful",
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token,
                });
            }
        );

    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// @route POST api/users/login
// @desc login user
// @access Public

router.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    try {
        // find the user by email
        let user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"User does not exist"});
        // check if password is correct
        const isMatch = await user.matchPassword(password);
        if(!isMatch) return res.status(400).json({message:"Invalid Credentials"});
        // create JWT payload
        const payload = {user:{id:user._id,role:user.role}};
        // sign and return the token along with user details
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"},(err,token)=>{
            console.log("token by sonu:",token)
            if(err) return res.status(500).json({message:"Token generation failed"});
            res.status(200).json({
                message:"Login successful",
                user:{_id:user._id,name:user.name,email:user.email,role:user.role},
                token,
            });
        });
    } catch (error) {
       console.log(error.message);
       res.status(500).json({message:"Server error"});
    }
});

/// @route GET /api/users/profile
// @desc Get user profile
// @access Private (Protected by middleware)
router.get("/profile", protect, async (req, res) => {
    try {
        // Ensure req.user is present
        if (!req.user) {
            return res.status(401).json({ message: "Not authorized, no user found" });
        }

        // Find the user and exclude the password
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});
module.exports = router;

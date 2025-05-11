const express = require("express");
const User = require("../models/User");
const {protect,isAdmin} = require("../middleware/authMiddleware");
const router = express.Router();

//@route GET /api/admin/users
//@desc Get all users
//@access Private/admin
router.get("/",protect,isAdmin,async(req,res)=>{
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
        
    }
});

//@routes POST /api/admin/user/
//@desc Create a new user
//@access Private/admin
router.post("/addUsers",protect,isAdmin,async(req,res)=>{
    const {name,email,password,role} = req.body;
    try {
        let user=await User.findOne({email});
        if(user) return res.status(400).json({msg:"User already exists"});
        user = new User({
            name,
            email,
            password,
            role:role || "customer",
        });
        await user.save();
        res.json({msg:"User created successfully",user});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"}); 
    }
});

//@route PUT /api/admin/user/:id
//@desc Update a user
//@access Private/admin
router.put("/updateUser/:id",protect,isAdmin,async(req,res)=>{
    // get the user id
    
    try {
        const user = await User.findById(req.params.id);
        // check if user exists
        if(!user) return res.status(404).json({msg:"User not found"});
        // update the user
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;
            user.role = req.body.role || user.role;
        }
        // save the updated user
        const updatedUser= await user.save();
        res.json({msg:"User updated successfully",user:updatedUser});
        } catch (error) {
            console.error(error.message);
            res.status(500).json({msg:"Server Error"});
        }
});

//@route DELETE /api/admin/user/:id
//@desc Delete a user
//@access Private/admin
router.delete("/deleteUser/:id",protect,isAdmin,async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        // check if user exists
        if(!user) return res.status(404).json({msg:"User not found"});
        // delete the user
        if(user){
            await user.deleteOne();
            res.json({msg:"User deleted successfully"});
        }else{
            res.status(404).json({msg:"User not found"});
        }
        } catch (error) {
            console.error(error.message);
            res.status(500).json({msg:"Server Error"});
        }
});

//exports
module.exports = router;
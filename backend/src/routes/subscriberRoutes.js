const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

//@route POST /API/SUBSCRIBER
//@desc  Create a new subscriber
//@access Public
router.post("/",async(req,res)=>{
    const {email} = req.body;

    if(!email){
        return res.status(400).json({msg:"Please enter an email"});
    }
    try {
        let subscriber = await Subscriber.findOne({email});
        if(subscriber){
            return res.status(400).json({msg:"Email already exists"});
        }
        //create a new subscriber
        subscriber = new Subscriber({email});
        await subscriber.save();
        res.json({msg:"Subscriber created successfully"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server error"});  
    }
});
module.exports = router;
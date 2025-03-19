const express = require("express");
const Order = require("../models/Order");
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();

//@route Get /api/orders/my-orders
//@desc Get all orders placed by user
// @access Private
router.get("/my-orders",protect,async(req,res)=>{
    try {
        //Find orders for the authenticated user
        const orders = await Order.find({user:req.user._id}).sort({
            createdAt:-1,
        }); // sort by most recent orders
        res.json(orders);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
        
    }
});

//@ROUTE GET  /api/orders/:id
//@DESC Get order by id
//@ACCESS Private
router.get("/:id",protect,async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email",
            
        );
        if(!order) return res.status(404).json({msg:"Order not found"});
        //Return the full order details
        res.json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"}); 
    }
});

//exports
module.exports = router;
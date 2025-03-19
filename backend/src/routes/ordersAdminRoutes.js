const express = require("express");
const Order = require("../models/Order");
const {protect,isAdmin} = require("../middleware/authMiddleware");
const router = express.Router();

//@route GET /api/admin/orders
//@desc Get all orders
//@access Private/admin
router.get("/",protect,isAdmin,async(req,res)=>{
    try {
        const orders = await Order.find({}).populate("user","name email");
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
        
    }
});

//@routes PUT /api/admin/order/:id
//@desc Update order status
//@access Private/admin
router.put("/:id",protect,isAdmin,async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            order.status = req.body.status || order.status;
            order.isDelivered = req.body.status === "Delivered" ? true : order.isDelivered;
            order.deliveredAt = req.body.status === "Delivered" ? Date.now() : order.deliveredAt;
            
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        }else{
            res.status(404).json({msg:"Order not found"});
        }
    } catch (error) {
            console.error(error.message);
            res.status(500).json({msg:"Server Error"});
    }
});

//@routes DELETE /api/admin/order/:id
//@desc Delete order
//@access Private/admin
router.delete("/:id",protect,isAdmin,async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            await order.deleteOne();
            res.status(200).json({msg:"Order deleted successfully",order:order});
        }else{
            res.status(404).json({msg:"Order not found"});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
});

//exports
module.exports = router;
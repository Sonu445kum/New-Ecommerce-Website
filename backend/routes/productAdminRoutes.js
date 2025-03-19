const express = require("express");
const Product = require("../models/Product");
const {protect,isAdmin} = require("../middleware/authMiddleware");
const router = express.Router();

//@route GET /api/admin/products
//@desc Get all products
//@access Private/admin
router.get("/",protect,isAdmin,async(req,res)=>{
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});  
    }
});


//exports
module.exports = router;
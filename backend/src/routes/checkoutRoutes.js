// const express = require("express");
// const Checkout = require("../models/Checkout");
// const Cart = require("../models/Cart");
// const Product = require("../models/Product");
// const Order = require("../models/Order");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// // @route POST /api/checkout
// // @desc Create a new checkout
// // @access Private
// router.post("/", protect, async (req, res) => {
//   const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

//   if (!checkoutItems || !Array.isArray(checkoutItems) || checkoutItems.length === 0) {
//     return res.status(400).json({ msg: "No items in cart" });
//   }

//   try {
//     const newCheckout = await Checkout.create({
//       user: req.user._id,
//       checkoutItems,
//       shippingAddress,
//       paymentMethod,
//       totalPrice,
//       paymentStatus: "Pending",
//       isPaid: false,
//     });

//     res.status(201).json(newCheckout);
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     res.status(500).json({ msg: "Error creating checkout session", error: error.message });
//   }
// });

// // @route PUT /api/checkout/:id/pay
// // @desc Update checkout to mark as paid after successful payment
// // @access Private
// router.put("/:id/pay", protect, async (req, res) => {
//     const { paymentStatus, paymentDetails } = req.body;
  
//     try {
//       const checkout = await Checkout.findById(req.params.id);
//       if (!checkout) {
//         return res.status(404).json({ msg: "Checkout not found" });
//       }
  
//       if (paymentStatus && paymentStatus.toLowerCase() === "paid") {
//         checkout.isPaid = true;
//         checkout.paymentStatus = paymentStatus;
//         checkout.paymentDetails = paymentDetails || {};
//         checkout.paidAt = Date.now();
  
//         // ✅ Save only modified fields, prevent full validation
//         await checkout.save({ validateModifiedOnly: true });
  
//         return res.status(200).json({ msg: "Checkout updated successfully", checkout });
//       } else {
//         return res.status(400).json({ msg: "Invalid payment status" });
//       }
//     } catch (error) {
//       console.error("Error updating checkout status:", error);
//       res.status(500).json({ msg: "Error updating checkout status", error: error.message });
//     }
//   });

// // @route POST /api/checkout/:id/finalize
// // @desc Finalize checkout and convert it to an order after payment confirmation
// // @access Private
// router.post("/:id/finalize", protect, async (req, res) => {
//     try {
//       const checkout = await Checkout.findById(req.params.id);
//       if (!checkout) {
//         return res.status(404).json({ msg: "Checkout not found" });
//       }
  
//       if (checkout.isPaid && !checkout.isFinalized) {
//         if (!checkout.checkoutItems || checkout.checkoutItems.length === 0) {
//           return res.status(400).json({ msg: "No items in checkout to finalize." });
//         }
  
//         // ✅ Fix: Use correct field name (productId instead of product)
//         const validOrderItems = checkout.checkoutItems.map(item => ({
//           productId: item.productId, // ✅ Fix here
//           name: item.name,
//           image: item.image,
//           price: item.price,
//           quantity: item.quantity || 1, // ✅ Default to 1 if missing
//         }));
  
//         if (validOrderItems.length === 0) {
//           return res.status(400).json({ msg: "No valid items to create an order." });
//         }
  
//         // ✅ Create final order
//         const finalOrder = await Order.create({
//           user: checkout.user,
//           orderItems: validOrderItems, // ✅ Fix here
//           shippingAddress: checkout.shippingAddress,
//           paymentMethod: checkout.paymentMethod,
//           totalPrice: checkout.totalPrice,
//           isPaid: true,
//           paidAt: checkout.paidAt,
//           isDelivered: false,
//           paymentStatus: "paid",
//           paymentDetails: checkout.paymentDetails || {},
//         });
  
//         checkout.isFinalized = true;
//         checkout.finalizedAt = Date.now();
//         await checkout.save();
  
//         await Cart.findOneAndDelete({ user: checkout.user });
  
//         res.status(201).json({ msg: "Order created successfully", order: finalOrder });
//       } else if (checkout.isFinalized) {
//         return res.status(400).json({ msg: "Checkout already finalized" });
//       } else {
//         return res.status(400).json({ msg: "Checkout is not paid yet" });
//       }
//     } catch (error) {
//       console.error("Error finalizing checkout:", error);
//       res.status(500).json({ msg: "Error finalizing checkout", error: error.message });
//     }
//   });
// module.exports = router;
  
const express = require("express");
const mongoose = require("mongoose");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route POST /api/checkout
 * @desc Create a new checkout session
 * @access Private
 */
router.post("/", protect, async (req, res) => {
    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    // ✅ Validate checkout items
    if (!checkoutItems || !Array.isArray(checkoutItems) || checkoutItems.length === 0) {
        return res.status(400).json({ msg: "No items in cart" });
    }

    try {
        const newCheckout = await Checkout.create({
            user: req.user._id,
            checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus: "Pending",
            isPaid: false,
        });

        res.status(201).json(newCheckout);
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ msg: "Error creating checkout session", error: error.message });
    }
});

/**
 * @route PUT /api/checkout/:id/pay
 * @desc Mark checkout as paid after successful payment
 * @access Private
 */
router.put("/:id/pay", protect, async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body;
  
    try {
      console.log("Received request to mark checkout as paid:", req.params.id);

      // 🔍 Check if ID is valid
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ msg: "Invalid checkout ID" });
      }

      const checkout = await Checkout.findById(req.params.id);

      if (!checkout) {
        console.log("❌ Checkout not found in database");
        return res.status(404).json({ msg: "Checkout not found" });
      }
  
      if (paymentStatus && paymentStatus.toLowerCase() === "paid") {
        checkout.isPaid = true;
        checkout.paymentStatus = paymentStatus;
        checkout.paymentDetails = paymentDetails || {};
        checkout.paidAt = Date.now();
  
        await checkout.save({ validateModifiedOnly: true });
  
        return res.status(200).json({ msg: "Checkout updated successfully", checkout });
      } else {
        return res.status(400).json({ msg: "Invalid payment status" });
      }
    } catch (error) {
      console.error("❌ Error updating checkout status:", error);
      res.status(500).json({ msg: "Error updating checkout status", error: error.message });
    }
});


/**
 * @route POST /api/checkout/:id/finalize
 * @desc Finalize checkout and convert it to an order after payment confirmation
 * @access Private
 */
router.post("/:id/finalize", protect, async (req, res) => {
    const checkoutId = req.params.id;

    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(checkoutId)) {
        return res.status(400).json({ msg: "Invalid checkout ID format" });
    }

    try {
        const checkout = await Checkout.findById(checkoutId);
        if (!checkout) {
            return res.status(404).json({ msg: "Checkout not found" });
        }

        if (!checkout.isPaid) {
            return res.status(400).json({ msg: "Checkout is not paid yet" });
        }

        if (checkout.isFinalized) {
            return res.status(400).json({ msg: "Checkout already finalized" });
        }

        if (!checkout.checkoutItems || checkout.checkoutItems.length === 0) {
            return res.status(400).json({ msg: "No items in checkout to finalize." });
        }

        // ✅ Validate product IDs before proceeding
        const validOrderItems = checkout.checkoutItems
            .filter(item => item.productId && mongoose.Types.ObjectId.isValid(item.productId))
            .map(item => ({
                productId: item.productId,
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: item.quantity || 1, // Default to 1 if missing
            }));

        if (validOrderItems.length === 0) {
            return res.status(400).json({ msg: "No valid items to create an order." });
        }

        // ✅ Create final order
        const finalOrder = await Order.create({
            user: checkout.user,
            orderItems: validOrderItems,
            shippingAddress: checkout.shippingAddress,
            paymentMethod: checkout.paymentMethod,
            totalPrice: checkout.totalPrice,
            isPaid: true,
            paidAt: checkout.paidAt,
            isDelivered: false,
            paymentStatus: "paid",
            paymentDetails: checkout.paymentDetails || {},
        });

        checkout.isFinalized = true;
        checkout.finalizedAt = Date.now();
        await checkout.save();

        await Cart.findOneAndDelete({ user: checkout.user });

        res.status(201).json({ msg: "Order created successfully", order: finalOrder });
    } catch (error) {
        console.error("Error finalizing checkout:", error);
        res.status(500).json({ msg: "Error finalizing checkout", error: error.message });
    }
});

module.exports = router;

  
  



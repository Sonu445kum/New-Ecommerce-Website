const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");
const mongoose = require("mongoose");
const router = express.Router();
// Helper function to get a cart by user id or guest Id
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};
//@route POST/API/CART
//@desc Add a product to the cart for a guest or logged in user
//@access Public

router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({
        message: "Product not Found",
      });

    // Determine if the user is logged in or guest
    let cart = await getCart(userId, guestId);

    // if the cart exists, update it
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );
      if (productIndex > -1) {
        // if the product already exists, update the quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // add new product
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }
      // Recalculate the total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      // Create a new cart for the guest or user
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//@route PUT/api/cart
//@desc Update the Product quantity  in the cart for a guest or logged-in user
//Access the public

router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    console.log("Cart Data:", JSON.stringify(cart, null, 2));
    console.log("Received Data:", { productId, size, color });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() ===
          new mongoose.Types.ObjectId(productId).toString() &&
        p.size.toLowerCase() === size.toLowerCase() &&
        p.color.toLowerCase() === color.toLowerCase()
    );

    if (productIndex === -1) {
      console.log("❌ Product not found in cart:");
      console.log("Cart products:", cart.products);
      console.log("Looking for:", { productId, size, color });

      return res.status(404).json({ message: "Product not found in cart" });
    }

    if (quantity > 0) {
      cart.products[productIndex].quantity = quantity;
    } else {
      cart.products.splice(productIndex, 1); // Remove product if quantity is 0
    }

    // Update totalPrice
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    console.log("Error updating cart:", error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart)
      return res.status(404).json({
        message: "Cart not found",
      });
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      //update quantity
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1); //Remove product if quantity is 0
      }

      //totalPrice
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

//@route DELETE /api/cart
//@desc Delete product from cart
//@access Public

router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;
  try {
    let cart = await getCart(userId, guestId);
    if (!cart)
      return res.status(404).json({
        message: "Cart not found",
      });
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

//@route GET /api/cart
//@desc Get cart products
//@access Public
router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;
  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      return res.status(200).json(cart.products);
    } else {
      return res.status(404).json({
        message: "Cart not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

// //@route POST /api/cart/merge
// //@desc Merge  guest cart into user cart on login
// //@access private
// router.post("/merge", protect, async (req, res) => {
//   const { guestId } = req.body;
//   try {
//     // Find the guest and user cart
//     const guestCart = await Cart.findOne({ guestId });
//     const userCart = await Cart.findOne({ user: req.user._id });

//     if (guestCart) {
//       // Merge the guest cart into the user cart
//       guestCart.products.forEach((guestItem) => {
//         const productIndex = userCart.products.findIndex(
//           (item) =>
//             item.productId.toString() === guestItem.productId.toString() &&
//             item.size === guestItem.size &&
//             item.color === guestItem.color
//         );
//         if (productIndex !== -1) {
//           userCart.products[productIndex].quantity += guestItem.quantity;
//         } else {
//           userCart.products.push(guestItem);
//         }
//       });

//       userCart.totalPrice = userCart.products.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//       );
//       // Save the updated user cart
//       await userCart.save();
//       // Remove the guest cart after merging
//       try {
//         await Cart.findOneAndDelete({ guestId });
//       } catch (error) {
//         console.log("error deleting guest cart:", error);
//       }
//       res.status(200).json({
//         message: "Guest cart merged successfully",
//         userCart,
//       });
//     }else{
//         // If the user has no existing cart,assign the guest cart to the user
//         guestCart.user = req.user._id;
//         guestCart.guestId = undefined;
//         await guestCart.save();
//         res.status(200).json({
//             message: "Guest cart assigned to user successfully",
//             userCart: guestCart

//         });
//     }else{
//         if(userCart){
//             // Guest cart has already been merged, return

//         }
//     }
//   } catch (error) {}
// });
// @route POST /api/cart/merge
// @desc Merge guest cart into user cart on login
// @access Private
router.post("/merge", protect, async (req, res) => {
    const { guestId } = req.body;
  
    try {
      // Find the guest and user cart
      const guestCart = await Cart.findOne({ guestId });
      let userCart = await Cart.findOne({ user: req.user._id });
  
      if (guestCart) {
        if (userCart) {
          // Merge guest cart products into user cart
          guestCart.products.forEach((guestItem) => {
            const productIndex = userCart.products.findIndex(
              (item) =>
                item.productId.toString() === guestItem.productId.toString() &&
                item.size === guestItem.size &&
                item.color === guestItem.color
            );
  
            if (productIndex !== -1) {
              userCart.products[productIndex].quantity += guestItem.quantity;
            } else {
              userCart.products.push(guestItem);
            }
          });
  
          userCart.totalPrice = userCart.products.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
  
          await userCart.save();
        } else {
          // If no existing user cart, convert guest cart to user cart
          guestCart.user = req.user._id;
          guestCart.guestId = undefined;
          userCart = await guestCart.save();
        }
  
        // Delete the guest cart
        await Cart.findOneAndDelete({ guestId });
  
        return res.status(200).json({
          message: "Guest cart merged successfully",
          userCart,
        });
      }
  
      return res.status(400).json({ message: "No guest cart found to merge" });
    } catch (error) {
      console.error("Error merging cart:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
module.exports = router;

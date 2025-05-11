// import { createSlice,asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



// //Helper function to load cart from localStorage
// const loadCartFromLocalStorage = () => {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : {products : null};
// };
// // Helper function to save cart to localStorage
// const saveCartToStorage =(cart)=>{
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// //fetch cart for a user or guest
// export const fetchCart = createAsyncThunk(
//     "cart/fetchCart",
//     async({userId,guestId},{rejectWithValue})=>{
//         try{
//             const response = await axios.get(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
//                 {
//                    params:{userId,guestId} 
//                 }
//             );
//             return response.data;
//         }catch (error) {
//             console.error(error);
//             return rejectWithValue(error.response.data);
            
//         }
//     }
// );

// //Add an item to the cart for a user or guest
// export const addToCart =createAsyncThunk("cart/addToCart",async({productId,quantity,size,color,guestId,userId},{rejectWithValue})=>{
//    try {
//     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{productId,quantity,size,color,guestId,userId});
//     return response.data;
//    } catch (error) {
//     return rejectWithValue(error.response.data);
//    }
// });

// //Update the quantity of an item in the cart
// export const updateCartItemQuantity = createAsyncThunk(
//     "cart/updateCartItemQuantity",
//     async({productId,quantity,guestId,userId,size,color},
//         {rejectWithValue}) => {
//             try {
//                 const response = await axios.put(
//                     `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
//                     {productId,quantity,guestId,userId,size,color}
//                 );
//                 return response.data;
//             } catch (error) {
//               console.error(error);
//               return rejectWithValue(error.response.data);
//             }
//         }
// );
// //Remove an item from the cart
// export const removeFromCart = createAsyncThunk("cart/removeFromCart",async({productId,guestId,userId,size,color},{rejectWithValue})=>{
//     try {
//         const response = await axios({
//             method: 'DELETE',
//             url: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
//             data: {productId,guestId,userId,size,color},
//         })
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// });

// // Merge guest cart into user cart
// // export const mergeCart = createAsyncThunk("cart/mergeCart",async({guestId,user},{rejectWithValue})=>{
// //     try {
// //         const response = await axios.post(
// //             `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
// //             {guestId,user},
// //             {
// //                 headers:{
// //                    Authorization:`Bearer ${localStorage.getItem("userToken")}`, 
// //                 },
// //             }
// //         );
// //         return response.data;
// //     }catch (error) {
// //         return rejectWithValue(error.response.data); 
// //     }
// // });

// export const mergeCart = createAsyncThunk(
//     "cart/mergeCart",
//     async ({ guestId, user }, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("userToken");

//             if (!token) {
//                 console.error("No user token found!");
//                 return rejectWithValue({ message: "Unauthorized: No token provided" });
//             }

//             const response = await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
//                 { guestId, user },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
                        
//                     },
//                 }
//             );

//             return response.data;
//         } catch (error) {
//             console.error("Merge Cart Error:", error.response?.data || error.message);
//             return rejectWithValue(error.response?.data || { message: "Server error" });
//         }
//     }
// );
// const cartSlice = createSlice({
//     name: "cart",
//     initialState:{
//         cart:loadCartFromLocalStorage(),
//         loading:false,
//         error:null,
//     },
//     reducers:{
//         //Clear item from cart
//         clearCart:(state)=>{
//             state.cart ={products:[]};
//             localStorage.removeItem("cart");
//         },

//     },
//     extraReducers:(builder)=>{
//         builder
//         .addCase(fetchCart.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(fetchCart.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.cart= action.payload
//             saveCartToStorage(action.payload);
//         })
//         .addCase(fetchCart.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.error.message || "Failed to fetch cart";
//         })
//         // fetch  to cart
//         .addCase(addToCart.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(addToCart.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.cart= action.payload
//             saveCartToStorage(action.payload);
//         })
//         .addCase(addToCart.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.payload?.message || "Failed to add to cart";
//         })

//         // update
//         .addCase(updateCartItemQuantity.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(updateCartItemQuantity.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.cart= action.payload
//             saveCartToStorage(action.payload);
//         })
//         .addCase(updateCartItemQuantity.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.payload?.message || "Failed to Update item quantity ";
//         })
//         //remove from the cart
//         .addCase(removeFromCart.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(removeFromCart.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.cart= action.payload
//             saveCartToStorage(action.payload);
//         })
//         .addCase(removeFromCart.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.payload?.message || "Failed to remove item from the  cart ";
//         })
//         // merge the cart
//         .addCase(mergeCart.pending,(state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(mergeCart.fulfilled,(state,action)=>{
//             state.loading = false;
//             state.cart= action.payload
//             saveCartToStorage(action.payload);
//         })
//         .addCase(mergeCart.rejected,(state,action)=>{
//             state.loading = false;
//             state.error = action.payload?.message || "Failed to merge   cart ";
//         })
        
//     }

// });
// export const {clearCart} =cartSlice.actions;
// export default cartSlice.reducer;

// new code 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

// Helper function to save cart to localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Fetch cart for a user or guest
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { params: { userId, guestId } }
      );
      return response.data;
    } catch (error) {
      console.error("Fetch Cart Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Failed to fetch cart" });
    }
  }
);

// Add an item to the cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity, size, color, guestId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        productId,
        quantity,
        size,
        color,
        guestId,
        userId,
      });
      return response.data;
    } catch (error) {
      console.error("Add to Cart Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Failed to add to cart" });
    }
  }
);

// Update the quantity of an item in the cart
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ productId, quantity, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        productId,
        quantity,
        guestId,
        userId,
        size,
        color,
      });
      return response.data;
    } catch (error) {
      console.error("Update Cart Item Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Failed to update cart item" });
    }
  }
);

// Remove an item from the cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
        data: { productId, guestId, userId, size, color },
      });
      return response.data;
    } catch (error) {
      console.error("Remove From Cart Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Failed to remove item from cart" });
    }
  }
);

// Merge guest cart into user cart
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, user }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No user token found!");
        return rejectWithValue({ message: "Unauthorized: No token provided" });
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
        { guestId, user },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Merge Cart Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Failed to merge cart" });
    }
  }
);

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch cart";
      })

      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add to cart";
      })

      // Update Cart Item Quantity
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update item quantity";
      })

      // Remove From Cart
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to remove item from cart";
      })

      // Merge Cart
      .addCase(mergeCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mergeCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(mergeCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to merge cart";
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;



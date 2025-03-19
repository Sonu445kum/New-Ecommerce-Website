// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// //Async thunk to create a checkout session
// export const createCheckout =createAsyncThunk(
//     'checkout/createCheckout',
//     async(checkoutData,{rejectWithValue})=>{
//         try {
//             const response = await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
//                 checkoutData,
//                 {
//                     headers:{
//                         Authorization:`Bearer ${localStorage.getItem("userToken")}`,
//                     },
//                 },
//             );
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             rejectWithValue(error.response.data);
//         }
//     }
// );

// //create slice
// const checkoutSlice = createSlice({
//     name:"checkout",
//     initialState:{
//         checkout:null,
//         loading:false,
//         error:null,
//     },
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder
//         .addCase(createCheckout.pending,(state)=>{
//             state.loading=true;
//             state.error=null;
//         })
//         .addCase(createCheckout.fulfilled,(state,action)=>{
//             state.loading=false;
//             state.checkout=action.payload;
//         })
//         .addCase(createCheckout.rejected,(state)=>{
//             state.loading=false;
//             state.error=action.payload.message;
//         });
//     },
// });
// //exports
// export default checkoutSlice.reducer;

// new code

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to create a checkout session
export const createCheckout = createAsyncThunk(
    "checkout/createCheckout",
    async (checkoutData, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem("userToken");
  
        if (!token) {
          console.error("No token found! Redirecting to login...");
          return rejectWithValue({ message: "User is not authenticated." });
        }
  
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
          checkoutData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              
            },
          }
        );
  
        return response.data;
      } catch (error) {
        console.error("Checkout error:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || { message: "Checkout failed" });
      }
    }
  );
  

// Create slice
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.loading = false;
        state.checkout = action.payload;
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong.";
      });
  },
});

// Exports
export default checkoutSlice.reducer;



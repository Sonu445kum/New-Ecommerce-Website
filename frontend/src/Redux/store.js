import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./Slices/authSlice";
import productReducers from "./Slices/productsSlice";
import cartReducers from "./Slices/cartSlice";
import checkoutReducers from "./Slices/checkoutSlice";
import orderReducers from "./Slices/orderSlice.js"
import adminReducers from "./Slices/adminSlice";
import adminProductReducers from "./Slices/adminProductSlice";
import adminOrderReducers from "./Slices/adminOrderSlice";
const store = configureStore({
  reducer: {
    auth: authReducers,
    products: productReducers,
    cart: cartReducers,
    checkout: checkoutReducers,
    order: orderReducers,
    admin: adminReducers,
    adminProducts:adminProductReducers,
    adminOrders:adminOrderReducers

  },
});

export default store;

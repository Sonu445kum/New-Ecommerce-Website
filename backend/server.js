const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const connectDb = require("./config/Db");
// import routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const checkoutRoutes = require("./routes/checkoutRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");
const subscribeRoutes = require("./routes/subscriberRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const productAdminRoutes = require("./routes/productAdminRoutes.js");
const ordersAdminRoutes = require("./routes/ordersAdminRoutes.js");
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json()); // Enables parsing of JSON request bodies
app.use(express.urlencoded({ extended: true })); // Allows form data parsing


dotenv.config({ path: './config.env' });
// console.log(process.env.PORT);

const PORT=process.env.PORT || 3000;
// connected to mongodb;
connectDb();
// app.get('/',(req,res)=>{
//     res.send("hello world");
// })

// user routes
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api/subscribe",subscribeRoutes);


//Admin Routes
app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",ordersAdminRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost ${PORT}`);
})
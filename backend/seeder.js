const dotenv = require("dotenv");
dotenv.config();  // Load environment variables at the very beginning

const mongoose = require("mongoose");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");
const Cart = require("./models/Cart");

// Check if the MongoDB URL is properly loaded
if (!process.env.MONGODB_URL) {
    console.error("Error: MONGODB_URL is not defined in .env file");
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL).then(() => console.log("MongoDB connected"))
  .catch(err => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
  });

// Function to seed data
const seedData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@gmail.com",
            password: "admin@123",
            role: "admin",
        });

        const userID = createdUser._id;
        const sampleProducts = products.map((product) => ({
            ...product,
            user: userID
        }));

        await Product.insertMany(sampleProducts);

        console.log("Data seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Error in seeding data:", error);
        process.exit(1);
    }
};

// Run the seeding function after MongoDB is connected
mongoose.connection.once("open", () => {
    seedData();
});

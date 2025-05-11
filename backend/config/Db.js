const mongoose = require("mongoose");


const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB is Successfully..!!");
    } catch (error) {
        console.log("Error while connecting to MongoDB",error);
        process.exit(1);
        
    }
}
module.exports=connectDb;
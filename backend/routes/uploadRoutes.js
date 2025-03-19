const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const router = express.Router();
require("dotenv").config();

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup using memory storage (for buffer uploads)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Function to handle the stream upload to Cloudinary
const streamUpload = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" }, // Allows any file type
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            }
        );
        // Convert file buffer to stream and pipe it to Cloudinary
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};

// Image Upload Route
router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Please upload an image." });
        }

        // Upload to Cloudinary
        const result = await streamUpload(req.file.buffer);

        // Return uploaded image URL
        res.status(200).json({ imageUrl: result.secure_url });
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// Export the router
module.exports = router;

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  // Check if the authorization header is present and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    try {
      // Get token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        console.error("No token found in authorization header");
        return res.status(401).json({ message: "Not authorized, token missing" });
      }

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user by the decoded user ID, excluding password
      req.user = await User.findById(decoded.user.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found, invalid token" });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error("Token Verification Failed:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // User is an admin, proceed to the next middleware or route handler
  } else {
    res.status(403).json({ message: "Access denied, not an admin" });
  }
};

module.exports = { protect,isAdmin };

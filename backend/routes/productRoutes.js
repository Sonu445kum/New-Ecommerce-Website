
const express = require("express");
const Product = require("../models/Product");  // Import Product model
const { protect, isAdmin } = require("..//middleware/authMiddleware");  // Import the protect middleware
const router = express.Router();
const mongoose = require("mongoose");

// @route POST api/products
// @desc Add a new product
// @access Private (only authenticated users can add products)
router.post("/", protect, isAdmin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            rating,
            numReviews,
            tags,
            metaTitle,
            metaDescription,
            metaKeywords,
            dimensions,
            weight,
        } = req.body;

        // Create a new product instance
        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            rating,
            numReviews,
            tags,
            user: req.user.id,  // User is automatically set based on the token
            metaTitle,
            metaDescription,
            metaKeywords,
            dimensions,
            weight,
        });

        // Save the product to the database
        await product.save();

        // Send a success response
        res.status(201).json({ message: "Product created successfully", product });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// @route PUT api/products/:id
// @desc Update an existing product
// @access Private (only authenticated admins can update products)
router.put("/:id", protect, isAdmin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            sku,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            rating,
            numReviews,
            tags,
            metaTitle,
            metaDescription,
            metaKeywords,
            dimensions,
            weight
        } = req.body;

        // Find the product by ID
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update the product fields with new data from the request body
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.discountPrice = discountPrice || product.discountPrice;
        product.countInStock = countInStock || product.countInStock;
        product.sku = sku || product.sku;
        product.category = category || product.category;
        product.brand = brand || product.brand;
        product.sizes = sizes || product.sizes;
        product.colors = colors || product.colors;
        product.collections = collections || product.collections;
        product.material = material || product.material;
        product.gender = gender || product.gender;
        product.images = images || product.images;
        product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
        product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
        product.rating = rating || product.rating;
        product.numReviews = numReviews || product.numReviews;
        product.tags = tags || product.tags;
        product.metaTitle = metaTitle || product.metaTitle;
        product.metaDescription = metaDescription || product.metaDescription;
        product.metaKeywords = metaKeywords || product.metaKeywords;
        product.dimensions = dimensions || product.dimensions;
        product.weight = weight || product.weight;

        // Save the updated product to the database
        await product.save();

        // Send the updated product as the response
        res.status(200).json({ message: "Product updated successfully", product });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// @route DELETE api/products/:id
// @desc Delete an existing product
// @access Private (only authenticated admins can delete products)
router.delete("/:id", protect, isAdmin, async (req, res) => {
    try {
        // Find the product by ID and delete it
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Send a success response
        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// @route GET /api/products
// @desc Get all products
// @access Public
router.get("/", async (req, res) => {
    try {
        const {
            collection,
            size,
            color,
            gender,
            minPrice,
            maxPrice,
            sortBy,
            search,
            category,
            material,
            brand,
            limit,
        } = req.query;
        const query = {};
        // Filter Logic
        if (collection && collection.toLocaleLowerCase() !== "all") {
            query.collections = collection;
        }

        // Category Logic
        if (category && category.toLocaleLowerCase() !== "all") {
            query.category = category;
        }
        // Material Logic
        if (material) {
            query.material = { $in: material.split(",") };
        }
        // brand Logic
        if (brand) {
            query.brand = { $in: brand.split(",") };
        }
        // size Logic
        if (size) {
            query.size = { $in: size.split(",") };
        }
        // color Logic
        if (color) {
            query.color = { $in: [color] };
        }
        // gender logic
        if (gender) {
            query.gender = gender;
        }
        // price logic
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        //search logic
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },

            ];
        }
        //sortBy logic
        let sort = {};
        if (sortBy) {
            switch (sortBy) {
                case "priceAsc":
                    sort = { price: 1 };
                    break;

                case "priceDesc":
                    sort = { price: -1 };
                    break;

                case "popularity":
                    sort = { rating: -1 };
                    break;

                default:
                    break;
            }
        }
        //fetch products and apply sorting and limits;
        const products = await Product.find(query)
            .sort(sort)
            .limit(Number(limit) || 0);
        res.json(products);

    } catch (error) {
        console.log("Error :", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


//@route GET /api/products/best-seller
//@desc Get best seller products
//@access Public
router.get("/best-seller", async (req, res) => {
    try {
        const bestSeller = await Product.findOne().sort({ rating: -1 });
        if (bestSeller) {
            res.json(bestSeller);
        } else {
            res.status(404).json({ message: "No best seller product found" });
        }
    } catch (error) {
        console.log("Error :", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// @route GET /api/products/new-arrivals
// @desc Retrieve latest 8 Products-creation date 
// @access Public
router.get("/new-arrivals", async (req, res) => {
    try {
        // fetch latest 8 Products
        const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(24);
        res.json(newArrivals);
    } catch (error) {
        console.log("Error :", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// @route GET /api/products/:id
// @desc Get Single product by id
// @access Public
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
  
    try {
      const product = await Product.findById(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

// @route GET /api/products/similar/:id
// @desc Get similar products by id
// @access Public
router.get("/similar/:id", async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
  
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const similarProducts = await Product.find({
        _id: { $ne: id },
        gender: product.gender,
        category: product.category,
      }).limit(4);
  
      res.status(200).json({
        message: "Similar products retrieved successfully",
        similarProducts,
      });
    } catch (error) {
      console.error("Error fetching similar products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


module.exports = router;


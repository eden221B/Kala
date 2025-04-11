const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Category = require("../models/Category");
const User = require("../models/Users");


router.post("/add", async (req, res) => {
    try {
        const { user_id, category_id, name, description, price, stock, image } = req.body;

        // Check if user exists
        const userExists = await User.findByPk(user_id);
        if (!userExists) {
            return res.status(400).json({ error: "User not found. Cannot add product!" });
        }

        // Check if category exists
        const categoryExists = await Category.findByPk(category_id);
        if (!categoryExists) {
            return res.status(400).json({ error: "Category not found. Cannot add product!" });
        }

        // Create product
        const newProduct = await Product.create({ user_id, category_id, name, description, price, stock, image });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


//read
router.get("/", async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//read 1
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [{ model: Category, attributes: ["name"] }], 
        });

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//update
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        await product.update(req.body);
        res.json({ message: "Product updated!", product });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        await product.destroy();
        res.json({ message: "Product deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//fetch
// Fetch products by category (limit to 6)
router.get("/category/:category_id", async (req, res) => {
    try {
        const { category_id } = req.params;
        const products = await Product.findAll({
            where: { category_id },
            limit: 6, // Only fetch 6 products
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;

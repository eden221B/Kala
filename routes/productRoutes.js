const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Category = require("../models/Category");

//add
router.post("/add", async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
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
            include: [{ model: Category, attributes: ["name"] }], // Include Category
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


module.exports = router;

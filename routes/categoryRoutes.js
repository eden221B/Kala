const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//add
router.post("/add", async (req, res) => {
    try {
        const { name, image_url } = req.body;

        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists!" });
        }

        const category = await Category.create({ name, image_url });
        res.json({ message: "Category added!", category });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


//read
router.get("/", async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// update category image
router.put("/update/:category_id", async (req, res) => {
    try {
        const { image_url } = req.body;
        const { category_id } = req.params;

        const category = await Category.findByPk(category_id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        category.image_url = image_url;
        await category.save();

        res.json({ message: "Category updated", category });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


//delete
router.delete("/delete/:category_id", async (req, res) => {
    try {
        const { category_id } = req.params;
        await Category.destroy({ where: { category_id } });
        res.json({ message: "Category deleted!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;

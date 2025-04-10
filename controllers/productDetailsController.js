const ProductDetails = require("../models/ProductDetails");
const Product = require("../models/Product");

// Create Product Details
exports.addProductDetails = async (req, res) => {
    try {
        const { product_id, material, dimensions, weight, additional_info } = req.body;
        const product = await Product.findByPk(product_id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const details = await ProductDetails.create({ product_id, material, dimensions, weight, additional_info });
        res.status(201).json(details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Product Details
exports.getAllProductDetails = async (req, res) => {
    try {
        const details = await ProductDetails.findAll({ include: Product });
        res.json(details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Product Details by Product ID
exports.getProductDetailsByProductId = async (req, res) => {
    try {
        const details = await ProductDetails.findOne({ where: { product_id: req.params.product_id }, include: Product });
        if (!details) return res.status(404).json({ message: "Product details not found" });
        res.json(details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Product Details
exports.updateProductDetails = async (req, res) => {
    try {
        const details = await ProductDetails.findOne({ where: { product_id: req.params.product_id } });
        if (!details) return res.status(404).json({ message: "Product details not found" });

        await details.update(req.body);
        res.json({ message: "Product details updated successfully", details });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Product Details
exports.deleteProductDetails = async (req, res) => {
    try {
        const details = await ProductDetails.findOne({ where: { product_id: req.params.product_id } });
        if (!details) return res.status(404).json({ message: "Product details not found" });

        await details.destroy();
        res.json({ message: "Product details deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

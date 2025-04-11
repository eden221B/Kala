/*
const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { Op } = require("sequelize");

// **1. Add Product to Cart**
router.post("/add", async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        // Check if product exists
        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        // Check if item already exists in cart
        let cartItem = await Cart.findOne({ where: { user_id, product_id } });

        if (cartItem) {
            // Update quantity if already in cart
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            // Add new item to cart
            cartItem = await Cart.create({ user_id, product_id, quantity });
        }

        res.json({ message: "Item added to cart!", cartItem });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// **2. Get All Items in User's Cart**
router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const cartItems = await Cart.findAll({
            where: { user_id },
            include: [
                {
                    model: Product,  // This ensures that product details are included
                    attributes: ["name", "price", "image"], // Select only required fields
                },
            ],
        });

        res.json(cartItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});

// **3. Remove Item from Cart**
router.delete("/remove/:cart_id", async (req, res) => {
    try {
        const { cart_id } = req.params;
        await Cart.destroy({ where: { cart_id } });
        res.json({ message: "Item removed from cart!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
*/

const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const CartProduct = require("../models/CartProduct");
const Product = require("../models/Product");

//add
router.post("/add", async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        console.log("Received request to add to cart:", req.body);

        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        let cart = await Cart.findOne({ where: { user_id } });
        if (!cart) {
            cart = await Cart.create({ user_id });
            console.log("New cart created:", cart);
        }

        let cartItem = await CartProduct.findOne({
            where: { cart_id: cart.cart_id, product_id },
        });

        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save();
            console.log("Updated quantity:", cartItem);
        } else {
            cartItem = await CartProduct.create({
                cart_id: cart.cart_id,
                product_id,
                quantity,
            });
            console.log("New cart item added:", cartItem);
        }

        res.json({ message: "Item added to cart!", cartItem });
    } catch (error) {
        console.error("Cart Add Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


//read
router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;

        const cart = await Cart.findOne({ where: { user_id } });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found!" });
        }

        const cartItems = await CartProduct.findAll({
            where: { cart_id: cart.cart_id },
            include: [{ model: Product, attributes: ["name", "price", "image"] }],
        });

        res.json(cartItems);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

//delete
router.delete("/remove/:cart_id/:product_id", async (req, res) => {
    try {
        const { cart_id, product_id } = req.params;
        await CartProduct.destroy({ where: { cart_id, product_id } });
        res.json({ message: "Item removed from cart!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;

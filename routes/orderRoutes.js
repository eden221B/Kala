const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

//place order
router.post("/place", async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//read
router.get("/", async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

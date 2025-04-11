const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

//add
router.post("/add", async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//delete
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const authenticateUser = require("../middleware/authMiddleware");

dotenv.config();


router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        const newUser = await User.create({ name, email, password, role });
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});




//read
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Update User by ID
router.put("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.update(req.body);
        res.json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete User by ID
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.destroy();
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        // Generate JWT Token
        const token = jwt.sign({ user_id: user.user_id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.json({ message: "Login successful!", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **Protected Route (Example)**
router.get("/profile", authenticateUser, async (req, res) => {
    try {
        console.log("Middleware Passed, User ID:", req.user.user_id);  // Debugging log

        const user = await User.findByPk(req.user.user_id);

        if (!user) {
            console.log("User Not Found");  // Debugging log
            return res.status(404).json({ error: "User not found" });
        }

        console.log("User Found:", user.dataValues);  // Debugging log
        res.json(user);
    } catch (err) {
        console.error("Error in Profile Route:", err.message);  // Debugging log
        res.status(500).json({ error: err.message });
    }
});




module.exports = router;

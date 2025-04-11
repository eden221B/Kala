const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Generate JWT token
const generateToken = (user) => {
    return jwt.sign({ userId: user.user_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

// REGISTER USER
// REGISTER USER
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        const token = generateToken(newUser);
        res.status(201).json({ message: "User registered successfully!", token, user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// LOGIN USER
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = generateToken(user);
        res.json({ message: "Login successful!", token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PROTECTED ROUTE (Example)
exports.protectedRoute = async (req, res) => {
    res.json({ message: "You have accessed a protected route!", user: req.user });
};

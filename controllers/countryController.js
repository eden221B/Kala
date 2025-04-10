const Country = require("../models/Country");

// Create Country
exports.addCountry = async (req, res) => {
    try {
        const country = await Country.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Countries
exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Country by ID
exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).json({ message: "Country not found" });
        res.json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Country
exports.updateCountry = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).json({ message: "Country not found" });

        await country.update(req.body);
        res.json({ message: "Country updated successfully", country });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Country
exports.deleteCountry = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).json({ message: "Country not found" });

        await country.destroy();
        res.json({ message: "Country deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

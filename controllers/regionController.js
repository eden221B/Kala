const Region = require("../models/Region");

// Create Region
exports.addRegion = async (req, res) => {
    try {
        const region = await Region.create(req.body);
        res.status(201).json(region);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Regions
exports.getRegions = async (req, res) => {
    try {
        const regions = await Region.findAll();
        res.json(regions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Region by ID
exports.getRegionById = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).json({ message: "Region not found" });
        res.json(region);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Region
exports.updateRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).json({ message: "Region not found" });

        await region.update(req.body);
        res.json({ message: "Region updated successfully", region });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Region
exports.deleteRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).json({ message: "Region not found" });

        await region.destroy();
        res.json({ message: "Region deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

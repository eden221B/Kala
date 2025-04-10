const Designation = require("../models/Designation");

exports.addDesignation = async (req, res) => {
    try {
        const designation = await Designation.create(req.body);
        res.status(201).json(designation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDesignations = async (req, res) => {
    try {
        const designations = await Designation.findAll();
        res.json(designations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDesignationById = async (req, res) => {
    try {
        const designation = await Designation.findByPk(req.params.id);
        if (!designation) return res.status(404).json({ message: "Designation not found" });
        res.json(designation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Designation
exports.updateDesignation = async (req, res) => {
    try {
        const designation = await Designation.findByPk(req.params.id);
        if (!designation) return res.status(404).json({ message: "Designation not found" });

        await designation.update(req.body);
        res.json({ message: "Designation updated successfully", designation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Designation
exports.deleteDesignation = async (req, res) => {
    try {
        const designation = await Designation.findByPk(req.params.id);
        if (!designation) return res.status(404).json({ message: "Designation not found" });

        await designation.destroy();
        res.json({ message: "Designation deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
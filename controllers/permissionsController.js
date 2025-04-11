const Permissions = require("../models/Permissions");

// Create Permission
exports.addPermission = async (req, res) => {
    try {
        const permission = await Permissions.create(req.body);
        res.status(201).json(permission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Permissions
exports.getPermissions = async (req, res) => {
    try {
        const permissions = await Permissions.findAll();
        res.json(permissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Permission by ID
exports.getPermissionById = async (req, res) => {
    try {
        const permission = await Permissions.findByPk(req.params.id);
        if (!permission) return res.status(404).json({ message: "Permission not found" });
        res.json(permission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Permission
exports.updatePermission = async (req, res) => {
    try {
        const permission = await Permissions.findByPk(req.params.id);
        if (!permission) return res.status(404).json({ message: "Permission not found" });

        await permission.update(req.body);
        res.json({ message: "Permission updated successfully", permission });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Permission
exports.deletePermission = async (req, res) => {
    try {
        const permission = await Permissions.findByPk(req.params.id);
        if (!permission) return res.status(404).json({ message: "Permission not found" });

        await permission.destroy();
        res.json({ message: "Permission deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

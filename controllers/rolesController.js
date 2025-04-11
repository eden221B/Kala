const Roles = require("../models/Roles");
const RolePermissions = require("../models/RolePermissions");

// Create Role
exports.addRole = async (req, res) => {
    try {
        const role = await Roles.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Roles
exports.getRoles = async (req, res) => {
    try {
        const roles = await Roles.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Role by ID
exports.getRoleById = async (req, res) => {
    try {
        const role = await Roles.findByPk(req.params.id);
        if (!role) return res.status(404).json({ message: "Role not found" });
        res.json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Role
exports.updateRole = async (req, res) => {
    try {
        const role = await Roles.findByPk(req.params.id);
        if (!role) return res.status(404).json({ message: "Role not found" });

        await role.update(req.body);
        res.json({ message: "Role updated successfully", role });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Role
exports.deleteRole = async (req, res) => {
    try {
        const role = await Roles.findByPk(req.params.id);
        if (!role) return res.status(404).json({ message: "Role not found" });

        await role.destroy();
        res.json({ message: "Role deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Assign Permission to Role
exports.assignPermission = async (req, res) => {
    try {
        const { role_id, permission_id } = req.body;
        const rolePermission = await RolePermissions.create({ role_id, permission_id });
        res.status(201).json({ message: "Permission assigned to role!", rolePermission });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Permissions for a Role
exports.getRolePermissions = async (req, res) => {
    try {
        const rolePermissions = await RolePermissions.findAll({ where: { role_id: req.params.role_id } });
        res.json(rolePermissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

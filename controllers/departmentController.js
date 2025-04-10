const Department = require("../models/Department");

exports.addDepartment = async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Department by ID
exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) return res.status(404).json({ message: "Department not found" });
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Department
exports.updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) return res.status(404).json({ message: "Department not found" });

        await department.update(req.body);
        res.json({ message: "Department updated successfully", department });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Department
exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) return res.status(404).json({ message: "Department not found" });

        await department.destroy();
        res.json({ message: "Department deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



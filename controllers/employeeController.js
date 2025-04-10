const Employees = require("../models/Employees");
const Department = require("../models/Department");
const Designation = require("../models/Designation");

// Create Employee
exports.addEmployee = async (req, res) => {
    try {
        const employee = await Employees.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Employees (With Department & Designation Details)
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employees.findAll({
            include: [
                { model: Department, attributes: ["name"] },
                { model: Designation, attributes: ["title"] },
            ],
        });
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employees.findByPk(req.params.id, {
            include: [
                { model: Department, attributes: ["name"] },
                { model: Designation, attributes: ["title"] },
            ],
        });
        if (!employee) return res.status(404).json({ message: "Employee not found" });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employees.findByPk(req.params.id);
        if (!employee) return res.status(404).json({ message: "Employee not found" });

        await employee.update(req.body);
        res.json({ message: "Employee updated successfully", employee });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employees.findByPk(req.params.id);
        if (!employee) return res.status(404).json({ message: "Employee not found" });

        await employee.destroy();
        res.json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

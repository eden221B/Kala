const sequelize = require("../config/database");

const Department = require("./Department");
const Designation = require("./Designation");
const Employees = require("./Employees");

// Define Associations
Department.hasMany(Employees, { foreignKey: "department_id" });
Designation.hasMany(Employees, { foreignKey: "designation_id" });
Employees.belongsTo(Department, { foreignKey: "department_id" });
Employees.belongsTo(Designation, { foreignKey: "designation_id" });

module.exports = { Department, Designation, Employees };

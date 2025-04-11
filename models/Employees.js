// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Department = require("./Department");
// const Designation = require("./Designation");

// const Employees = sequelize.define("Employees", {
//     employee_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     department_id: {
//         type: DataTypes.INTEGER,
//         references: { model: Department, key: "department_id" },
//     },
//     designation_id: {
//         type: DataTypes.INTEGER,
//         references: { model: Designation, key: "designation_id" },
//     },
// }, { timestamps: true });

// //Employees.belongsTo(Department, { foreignKey: "department_id" });
// //Employees.belongsTo(Designation, { foreignKey: "designation_id" });

// module.exports = Employees;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Department = require("./Department");
const Designation = require("./Designation");

const Employees = sequelize.define("Employees", {
    employee_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    department_id: { type: DataTypes.INTEGER, allowNull: false },
    designation_id: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true });

// Define Associations Directly in the Model File
Employees.belongsTo(Department, { foreignKey: "department_id", onDelete: "CASCADE", onUpdate: "CASCADE" });
Department.hasMany(Employees, { foreignKey: "department_id", onDelete: "CASCADE", onUpdate: "CASCADE" });

Employees.belongsTo(Designation, { foreignKey: "designation_id", onDelete: "CASCADE", onUpdate: "CASCADE" });
Designation.hasMany(Employees, { foreignKey: "designation_id", onDelete: "CASCADE", onUpdate: "CASCADE" });

module.exports = Employees;

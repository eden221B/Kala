// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Employees = require("./Employees"); // ✅ Ensure Employees is imported


// const Department = sequelize.define("Department", {
//     department_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false, unique: true },
// }, { timestamps: true });

// //Department.hasMany(Employees, { foreignKey: "department_id" });

// module.exports = Department;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Department = sequelize.define("Department", {
    department_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = Department;

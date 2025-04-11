// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Employees = require("./Employees"); // ✅ Ensure Employees is imported


// const Designation = sequelize.define("Designation", {
//     designation_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, allowNull: false, unique: true },
// }, { timestamps: true });

// //Designation.hasMany(Employees, { foreignKey: "designation_id" });

// module.exports = Designation;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Designation = sequelize.define("Designation", {
    designation_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = Designation;

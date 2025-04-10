const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Roles = sequelize.define("Roles", {
    role_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    },
}, { timestamps: true });

module.exports = Roles;

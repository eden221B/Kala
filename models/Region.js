const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Region = sequelize.define("Region", {
    region_id: { 
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

module.exports = Region;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Country = sequelize.define("Country", {
    country_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = Country;

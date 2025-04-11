const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define("Category", {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Category;

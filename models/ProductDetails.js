const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = require("./Product");

const ProductDetails = sequelize.define("ProductDetails", {
    detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    material: { type: DataTypes.STRING, allowNull: false },
    dimensions: { type: DataTypes.STRING, allowNull: true },
    weight: { type: DataTypes.FLOAT, allowNull: true },
    additional_info: { type: DataTypes.TEXT, allowNull: true }
}, { timestamps: true });

// Define Associations
ProductDetails.belongsTo(Product, { foreignKey: "product_id", onDelete: "CASCADE", onUpdate: "CASCADE" });
Product.hasOne(ProductDetails, { foreignKey: "product_id", onDelete: "CASCADE", onUpdate: "CASCADE" });

module.exports = ProductDetails;

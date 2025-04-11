const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./Users"); 
const Product = require("./Product");

const Order = sequelize.define("Order", {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "user_id",
        },
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "shipped", "delivered", "cancelled"),
        defaultValue: "pending",
    },
}, {
    timestamps: true,
});

module.exports = Order;

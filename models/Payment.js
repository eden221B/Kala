const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./Order");

const Payment = sequelize.define("Payment", {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: "order_id",
        },
    },
    payment_method: {
        type: DataTypes.ENUM("credit_card", "debit_card", "paypal", "cash_on_delivery"),
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.ENUM("pending", "completed", "failed"),
        defaultValue: "pending",
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Payment;

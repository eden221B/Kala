/*
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./Users");
const Product = require("./Product");

const Cart = sequelize.define("Cart", {
    cart_id: {
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
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: "product_id",
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    timestamps: true,
});

Cart.belongsTo(Product, { foreignKey: "product_id" }); 
Cart.belongsTo(User, { foreignKey: "user_id" });  

module.exports = Cart;
*/
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./Users");

const Cart = sequelize.define("Cart", {
    cart_id: {
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
}, {
    timestamps: true,
});

Cart.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"  });
User.hasMany(Cart, { foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE" });

module.exports = Cart;

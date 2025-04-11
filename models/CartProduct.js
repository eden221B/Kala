const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cart = require("./Cart");
const Product = require("./Product");

const CartProduct = sequelize.define("CartProduct", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cart,
            key: "cart_id",
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


Cart.belongsToMany(Product, { through: CartProduct, foreignKey: "cart_id" });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: "product_id" });

CartProduct.belongsTo(Product, { foreignKey: "product_id" });
CartProduct.belongsTo(Cart, { foreignKey: "cart_id" });

module.exports = CartProduct;

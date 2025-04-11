const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./Users"); 
const Product = require("./Product"); 

const Review = sequelize.define("Review", {
    review_id: {
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
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5, 
        },
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
}, {
    timestamps: true,
});

module.exports = Review;

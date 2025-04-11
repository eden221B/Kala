const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcryptjs");

const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user", // Default role
    }
});

// Hash password before saving
User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;

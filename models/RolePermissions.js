const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Roles = require("./Roles");
const Permissions = require("./Permissions");

const RolePermissions = sequelize.define("RolePermissions", {
    role_id: {
        type: DataTypes.INTEGER,
        references: { model: Roles, key: "role_id" },
    },
    permission_id: {
        type: DataTypes.INTEGER,
        references: { model: Permissions, key: "permission_id" },
    },
}, { timestamps: true });

module.exports = RolePermissions;

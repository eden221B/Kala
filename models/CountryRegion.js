const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Country = require("./Country");
const Region = require("./Region");

const CountryRegion = sequelize.define("CountryRegion", {
    country_id: {
        type: DataTypes.INTEGER,
        references: { model: Country, key: "country_id" },
    },
    region_id: {
        type: DataTypes.INTEGER,
        references: { model: Region, key: "region_id" },
    },
}, { timestamps: true });

module.exports = CountryRegion;

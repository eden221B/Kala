const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Country = require("./Country");
const State = require("./State");

const CountryState = sequelize.define("CountryState", {
    country_id: {
        type: DataTypes.INTEGER,
        references: { model: Country, key: "country_id" },
    },
    state_id: {
        type: DataTypes.INTEGER,
        references: { model: State, key: "state_id" },
    },
}, { timestamps: true });

module.exports = CountryState;

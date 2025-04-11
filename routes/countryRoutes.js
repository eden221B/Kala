const express = require("express");
const router = express.Router();
const { addCountry, getCountries, getCountryById, updateCountry, deleteCountry } = require("../controllers/countryController");

router.post("/add", addCountry);
router.get("/", getCountries);
router.get("/:id", getCountryById);
router.put("/:id", updateCountry);
router.delete("/:id", deleteCountry);

module.exports = router;

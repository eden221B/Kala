const express = require("express");
const router = express.Router();
const { addRegion, getRegions, getRegionById, updateRegion, deleteRegion } = require("../controllers/regionController");

router.post("/add", addRegion);
router.get("/", getRegions);
router.get("/:id", getRegionById);
router.put("/:id", updateRegion);
router.delete("/:id", deleteRegion);

module.exports = router;

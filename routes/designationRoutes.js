const express = require("express");
const router = express.Router();
const { addDesignation, getDesignations, getDesignationById, updateDesignation, deleteDesignation } = require("../controllers/designationController");

router.post("/add", addDesignation);
router.get("/", getDesignations);
router.get("/:id", getDesignationById);
router.put("/:id", updateDesignation);
router.delete("/:id", deleteDesignation);


module.exports = router;

const express = require("express");
const router = express.Router();
const { addDepartment, getDepartments, getDepartmentById, updateDepartment, deleteDepartment } = require("../controllers/departmentController");

router.post("/add", addDepartment);
router.get("/", getDepartments);
router.get("/:id", getDepartmentById);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

module.exports = router;

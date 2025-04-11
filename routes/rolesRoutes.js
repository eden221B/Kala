const express = require("express");
const router = express.Router();
const { addRole, getRoles, getRoleById, updateRole, deleteRole, assignPermission, getRolePermissions } = require("../controllers/rolesController");

router.post("/add", addRole);
router.get("/", getRoles);
router.get("/:id", getRoleById);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

// Role-Permission Routes
router.post("/assign-permission", assignPermission);
router.get("/:role_id/permissions", getRolePermissions);

module.exports = router;

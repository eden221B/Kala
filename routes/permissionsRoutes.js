const express = require("express");
const router = express.Router();
const { addPermission, getPermissions, getPermissionById, updatePermission, deletePermission } = require("../controllers/permissionsController");

router.post("/add", addPermission);
router.get("/", getPermissions);
router.get("/:id", getPermissionById);
router.put("/:id", updatePermission);
router.delete("/:id", deletePermission);

module.exports = router;

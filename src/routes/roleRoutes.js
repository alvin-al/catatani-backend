import express from "express";
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../controllers/roleController.js";

const router = express.Router();

// Create a new role
router.post("/", createRole);

// Get all roles
router.get("/", getAllRoles);

// Get a single role by ID
router.get("/:name", getRoleById);

// Update a role
router.put("/:oldName", updateRole);

// Delete a role
router.delete("/:name", deleteRole);

export default router;

import express from "express";
import {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
} from "../controllers/materialController.js";

const router = express.Router();

// Create Material
router.post("/", createMaterial);

// Get All Materials
router.get("/", getAllMaterials);

// Get Material by ID
router.get("/:id", getMaterialById);

// Update Material
router.put("/:id", updateMaterial);

// Delete Material
router.delete("/:id", deleteMaterial);

export default router;

import express from "express";
import {
  createMaterialUsage,
  getAllMaterialUsages,
  getMaterialUsageById,
  updateMaterialUsage,
  deleteMaterialUsage,
} from "../controllers/materialUsageController.js";

const router = express.Router();

router.post("/", createMaterialUsage);
router.get("/", getAllMaterialUsages);
router.get("/:id", getMaterialUsageById);
router.put("/:id", updateMaterialUsage);
router.delete("/:id", deleteMaterialUsage);

export default router;

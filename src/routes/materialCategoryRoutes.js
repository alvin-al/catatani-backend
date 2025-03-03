import express from "express";
import {
  createMaterialCategory,
  getAllMaterialCategory,
  getMaterialCategoryByName,
  updateMaterialCategory,
  deleteMaterialCategory,
} from "../controllers/materialCategoryController.js";

const router = express.Router();

router.post("/", createMaterialCategory);
router.get("/", getAllMaterialCategory);
router.get("/:name", getMaterialCategoryByName);
router.put("/:name", updateMaterialCategory);
router.delete("/:name", deleteMaterialCategory);

export default router;

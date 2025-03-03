import express from "express";
import {
  createField,
  updateField,
  getAllField,
  getFieldById,
  deleteField,
} from "../controllers/fieldController.js";

const router = express.Router();

router.post("/", createField);
router.get("/", getAllField);
router.get("/:id", getFieldById);
router.put("/:id", updateField);
router.delete("/:id", deleteField);

export default router;

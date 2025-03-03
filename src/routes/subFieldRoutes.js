import express from "express";
import {
  createSubField,
  updateSubField,
  getAllSubField,
  getSubFieldById,
  deleteSubField,
} from "../controllers/subFieldController.js";

const router = express.Router();

router.post("/", createSubField);
router.get("/", getAllSubField);
router.get("/:id", getSubFieldById);
router.put("/:id", updateSubField);
router.delete("/:id", deleteSubField);

export default router;

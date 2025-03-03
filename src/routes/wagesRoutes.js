import express from "express";
import {
  createWages,
  getAllWages,
  getWagesById,
  updateWages,
  deleteWages,
} from "../controllers/wagesController.js";

const router = express.Router();

router.post("/", createWages);
router.get("/", getAllWages);
router.get("/:id", getWagesById);
router.put("/:id", updateWages);
router.delete("/:id", deleteWages);

export default router;

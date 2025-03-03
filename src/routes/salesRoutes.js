import express from "express";
import {
  createSales,
  getAllSales,
  getSalesById,
  updateSales,
  deleteSales,
} from "../controllers/salesController.js";

const router = express.Router();

router.post("/", createSales);
router.get("/", getAllSales);
router.get("/:id", getSalesById);
router.put("/:id", updateSales);
router.delete("/:id", deleteSales);

export default router;

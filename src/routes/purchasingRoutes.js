import express from "express";
import {
  createPurchasing,
  getAllPurchasings,
  getPurchasingById,
  updatePurchasing,
  deletePurchasing,
} from "../controllers/purchasingController.js";

const router = express.Router();

router.post("/", createPurchasing);
router.get("/", getAllPurchasings);
router.get("/:id", getPurchasingById);
router.put("/:id", updatePurchasing);
router.delete("/:id", deletePurchasing);

export default router;

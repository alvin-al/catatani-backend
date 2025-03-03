import express from "express";
import {
  createUom,
  getAllUom,
  getUomByName,
  updateUom,
  deleteUom,
} from "../controllers/uomController.js";

const router = express.Router();

router.post("/", createUom);
router.get("/", getAllUom);
router.get("/:name", getUomByName);
router.put("/:name", updateUom);
router.delete("/:name", deleteUom);

export default router;

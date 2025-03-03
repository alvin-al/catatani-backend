import express from "express";
import {
  createHarvest,
  getAllHarvests,
  getHarvestById,
  updateHarvest,
  deleteHarvest,
} from "../controllers/harvestController.js";

const router = express.Router();

// Create Harvest
router.post("/", createHarvest);

// Get All Harvests
router.get("/", getAllHarvests);

// Get Harvest by ID
router.get("/:id", getHarvestById);

// Update Harvest
router.put("/:id", updateHarvest);

// Delete Harvest
router.delete("/:id", deleteHarvest);

export default router;

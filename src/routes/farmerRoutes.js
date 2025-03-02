import express from "express";
import {
  addfarmer,
  getAllFarmers,
  getFarmerById,
  changeFarmer,
  deleteFarmer,
} from "../controllers/farmerController.js";

const router = express.Router();

//Add farmer
router.post("/", addfarmer);

//Get all farmers
router.get("/", getAllFarmers);

//Get farmer by ID
router.get("/:id", getFarmerById);

//Modify farmer
router.put("/:id", changeFarmer);

//Delete farmer
router.delete("/:id", deleteFarmer);

export default router;

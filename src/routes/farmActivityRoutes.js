import express from "express";
import {
  createFarmActivity,
  getAllFarmActivity,
  getFarmActivityByName,
  updateFarmActivity,
  deleteFarmActivity,
} from "../controllers/farmActivityController.js";

const router = express.Router();

router.post("/", createFarmActivity);
router.get("/", getAllFarmActivity);
router.get("/:name", getFarmActivityByName);
router.put("/:name", updateFarmActivity);
router.delete("/:name", deleteFarmActivity);

export default router;

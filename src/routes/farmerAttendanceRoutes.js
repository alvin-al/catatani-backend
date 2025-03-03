import express from "express";
import {
  createFarmerAttendance,
  getAllFarmerAttendances,
  getFarmerAttendanceById,
  updateFarmerAttendance,
  deleteFarmerAttendance,
} from "../controllers/farmerAttendanceController.js";

const router = express.Router();

// Create Farmer Attendance
router.post("/", createFarmerAttendance);

// Get All Farmer Attendances
router.get("/", getAllFarmerAttendances);

// Get Farmer Attendance by ID
router.get("/:id", getFarmerAttendanceById);

// Update Farmer Attendance
router.put("/:id", updateFarmerAttendance);

// Delete Farmer Attendance
router.delete("/:id", deleteFarmerAttendance);

export default router;

import express from "express";
import {
  createProcess,
  getAllProcess,
  getProcessByName,
  updateProcess,
  deleteProcess,
} from "../controllers/processController.js";

const router = express.Router();

router.post("/", createProcess);
router.get("/", getAllProcess);
router.get("/:name", getProcessByName);
router.put("/:name", updateProcess);
router.delete("/:name", deleteProcess);

export default router;

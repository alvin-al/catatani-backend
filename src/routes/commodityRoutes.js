import express from "express";
import {
  createCommodity,
  getAllComodities,
  getComodityById,
  updateCommodity,
  deleteCommodity,
} from "../controllers/commodityController.js";

const router = express.Router();

//create commodity
router.post("/", createCommodity);

//get all commodity
router.get("/", getAllComodities);

//get commodity by name
router.get("/:name", getComodityById);

//update commodity by name
router.get("/:oldName", updateCommodity);

//delete commodity
router.delete("/:name", deleteCommodity);

export default router;

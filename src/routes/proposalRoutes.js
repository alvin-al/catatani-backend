import express from "express";
import {
  createProposal,
  getAllProposals,
  getProposalById,
  updateProposal,
  deleteProposal,
} from "../controllers/proposalController.js";

const router = express.Router();

router.post("/", createProposal);
router.get("/", getAllProposals);
router.get("/:id", getProposalById);
router.put("/:id", updateProposal);
router.delete("/:id", deleteProposal);

export default router;

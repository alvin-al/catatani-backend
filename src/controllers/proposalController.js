import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Proposal
export const createProposal = async (req, res) => {
  try {
    const {
      name,
      commodity_id,
      field_id,
      planting_distance,
      population,
      harvest_weight_per_tree,
      planting_plan_date,
      harvest_plan_date,
    } = req.body;

    const proposal = await prisma.proposal.create({
      data: {
        name,
        commodity_id,
        field_id: field_id ? parseInt(field_id, 10) : undefined,
        planting_distance: planting_distance
          ? parseInt(planting_distance, 10)
          : undefined,
        population: population ? parseInt(population, 10) : undefined,
        harvest_weight_per_tree: harvest_weight_per_tree
          ? parseInt(harvest_weight_per_tree, 10)
          : undefined,
        planting_plan_date: planting_plan_date
          ? new Date(planting_plan_date)
          : undefined,
        harvest_plan_date: harvest_plan_date
          ? new Date(harvest_plan_date)
          : undefined,
      },
    });

    res.status(201).json({ proposal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Proposals
export const getAllProposals = async (req, res) => {
  try {
    const allProposals = await prisma.proposal.findMany();
    res.status(200).json({ allProposals });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Proposal by ID
export const getProposalById = async (req, res) => {
  try {
    const { id } = req.params;

    const selectedProposal = await prisma.proposal.findUnique({
      where: { id },
    });

    if (!selectedProposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    res.status(200).json({ selectedProposal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Proposal
export const updateProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      commodity_id,
      field_id,
      planting_distance,
      population,
      harvest_weight_per_tree,
      planting_plan_date,
      harvest_plan_date,
    } = req.body;

    const updatedProposal = await prisma.proposal.update({
      where: { id },
      data: {
        name: name || undefined,
        commodity_id: commodity_id || undefined,
        field_id: field_id !== undefined ? parseInt(field_id, 10) : undefined,
        planting_distance:
          planting_distance !== undefined
            ? parseInt(planting_distance, 10)
            : undefined,
        population:
          population !== undefined ? parseInt(population, 10) : undefined,
        harvest_weight_per_tree:
          harvest_weight_per_tree !== undefined
            ? parseInt(harvest_weight_per_tree, 10)
            : undefined,
        planting_plan_date: planting_plan_date
          ? new Date(planting_plan_date)
          : undefined,
        harvest_plan_date: harvest_plan_date
          ? new Date(harvest_plan_date)
          : undefined,
      },
    });

    res.status(200).json({ updatedProposal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Proposal
export const deleteProposal = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.proposal.delete({
      where: { id },
    });

    res.status(200).json({ message: "Delete proposal success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

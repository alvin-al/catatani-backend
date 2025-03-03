import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Harvest
export const createHarvest = async (req, res) => {
  try {
    const {
      proposal_id,
      commodity_id,
      field_id,
      sub_field_id,
      farmer_id,
      harvest_date,
      gross_harvest,
      net_harvest,
    } = req.body;

    const harvest = await prisma.harvest.create({
      data: {
        proposal_id,
        commodity_id,
        field_id: field_id ? parseInt(field_id, 10) : undefined,
        sub_field_id: sub_field_id ? parseInt(sub_field_id, 10) : undefined,
        farmer_id: farmer_id ? parseInt(farmer_id, 10) : undefined,
        harvest_date: harvest_date ? new Date(harvest_date) : undefined,
        gross_harvest: gross_harvest ? parseFloat(gross_harvest) : undefined,
        net_harvest: net_harvest ? parseFloat(net_harvest) : undefined,
      },
    });

    res.status(201).json({ harvest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Harvests
export const getAllHarvests = async (req, res) => {
  try {
    const allHarvests = await prisma.harvest.findMany();
    res.status(200).json({ allHarvests });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Harvest by ID
export const getHarvestById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    const selectedHarvest = await prisma.harvest.findUnique({
      where: { id: parsedId },
    });

    if (!selectedHarvest) {
      return res.status(404).json({ message: "Harvest not found" });
    }

    res.status(200).json({ selectedHarvest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Harvest
export const updateHarvest = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const {
      proposal_id,
      commodity_id,
      field_id,
      sub_field_id,
      farmer_id,
      harvest_date,
      gross_harvest,
      net_harvest,
    } = req.body;

    const updatedHarvest = await prisma.harvest.update({
      where: { id: parsedId },
      data: {
        proposal_id: proposal_id || undefined,
        commodity_id: commodity_id || undefined,
        field_id: field_id !== undefined ? parseInt(field_id, 10) : undefined,
        sub_field_id:
          sub_field_id !== undefined ? parseInt(sub_field_id, 10) : undefined,
        farmer_id:
          farmer_id !== undefined ? parseInt(farmer_id, 10) : undefined,
        harvest_date: harvest_date ? new Date(harvest_date) : undefined,
        gross_harvest:
          gross_harvest !== undefined ? parseFloat(gross_harvest) : undefined,
        net_harvest:
          net_harvest !== undefined ? parseFloat(net_harvest) : undefined,
      },
    });

    res.status(200).json({ updatedHarvest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Harvest
export const deleteHarvest = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    await prisma.harvest.delete({
      where: { id: parsedId },
    });

    res.status(200).json({ message: "Delete harvest success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

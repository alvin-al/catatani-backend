import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Wages
export const createWages = async (req, res) => {
  try {
    const { activity_id, amount } = req.body;

    const wages = await prisma.wages.create({
      data: {
        activity_id,
        amount: amount ? parseFloat(amount) : undefined,
      },
    });

    res.status(201).json({ wages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Wages
export const getAllWages = async (req, res) => {
  try {
    const allWages = await prisma.wages.findMany();
    res.status(200).json({ allWages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Wages by ID
export const getWagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    const selectedWages = await prisma.wages.findUnique({
      where: { id: parsedId },
    });

    if (!selectedWages) {
      return res.status(404).json({ message: "Wages not found" });
    }

    res.status(200).json({ selectedWages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Wages
export const updateWages = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const { activity_id, amount } = req.body;

    const updatedWages = await prisma.wages.update({
      where: { id: parsedId },
      data: {
        activity_id: activity_id || undefined,
        amount: amount !== undefined ? parseFloat(amount) : undefined,
      },
    });

    res.status(200).json({ updatedWages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Wages
export const deleteWages = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    await prisma.wages.delete({
      where: { id: parsedId },
    });

    res.status(200).json({ message: "Delete wages success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

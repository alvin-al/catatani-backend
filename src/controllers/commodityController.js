import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Create commodity
export const createCommodity = async (req, res) => {
  try {
    const { name } = req.body;
    const commodity = await prisma.commodity.create({
      data: { name },
    });
    res.status(201).json({ commodity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Get all commodity
export const getAllComodities = async (req, res) => {
  try {
    const commodities = await prisma.commodity.findMany();
    res.status(201).json({ commodities });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get commodity by ID
export const getComodityById = async (req, res) => {
  try {
    const { name } = req.params;
    const commodity = await prisma.commodity.findUnique({
      where: { name: name },
    });
    if (!commodity) {
      return res.status(404).json({ message: "Commodity not found" });
    }
    res.status(201).json({ commodity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update commodity
export const updateCommodity = async (req, res) => {
  try {
    const { oldName } = req.params;
    const { name: newName } = req.body;
    const updatedCommodity = await prisma.commodity.update({
      where: { name: oldName },
      data: { name: newName },
    });
    res.status(201).json({ updatedCommodity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete commodity
export const deleteCommodity = async (req, res) => {
  try {
    const { name } = req.params;
    await prisma.commodity.delete({ where: { name: name } });
    res.status(201).json({ message: "Delete commodity success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

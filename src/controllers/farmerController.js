import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add farmer
//Get all farmers
//Get farmer by ID
//Modify farmer
//Delete farmer

//Add farmer
export const addfarmer = async (req, res) => {
  try {
    const { name, address, phone_number } = req.body;
    const farmer = await prisma.farmer.create({
      data: {
        name: name,
        phone_number: phone_number,
        address: address,
      },
    });
    res.status(201).json(farmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Get all farmers
export const getAllFarmers = async (req, res) => {
  try {
    const farmers = await prisma.farmer.findMany();
    res.status(201).json({ farmers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Get farmer by ID
export const getFarmerById = async (req, res) => {
  try {
    const { id } = req.params;
    const farmer = await prisma.farmer.findUnique({
      where: { id: parseInt(id) },
    });
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.status(201).json({ farmer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Modify farmer
export const changeFarmer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phone_number } = req.body;
    const updatedFarmer = await prisma.farmer.update({
      where: { id: parseInt(id) },
      data: {
        name: name,
        address: address,
        phone_number: phone_number,
      },
    });
    res.status(201).json({ updatedFarmer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete farmer
export const deleteFarmer = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.farmer.delete({
      where: { id: parseInt(id) },
    });
    res.status(201).json({ message: "Delete farmer success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

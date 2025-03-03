import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add uom
export const createUom = async (req, res) => {
  try {
    const { name } = req.body;
    const uom = await prisma.master_uom.create({
      data: { name },
    });
    res.status(201).json({ uom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all uom
export const getAllUom = async (req, res) => {
  try {
    const allUom = await prisma.master_uom.findMany();
    res.status(200).json({ allUom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get uom by id
export const getUomByName = async (req, res) => {
  try {
    const { name } = req.params;
    const selectedUom = await prisma.master_uom.findUnique({
      where: { name },
    });
    if (!selectedUom) {
      return res.status(404).json({ message: "UoM not found" });
    }
    res.status(200).json({ selectedUom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update uom
export const updateUom = async (req, res) => {
  try {
    const { name } = req.params;
    const { name: newName } = req.body;

    const updatedUom = await prisma.master_uom.update({
      where: { name },
      data: { name: newName },
    });
    res.status(200).json({ updatedUom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete uom
export const deleteUom = async (req, res) => {
  try {
    const { name } = req.params;
    await prisma.master_uom.delete({
      where: { name: name },
    });
    res.status(201).json({ message: "Delete UoM success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

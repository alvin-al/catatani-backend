import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add field
export const createField = async (req, res) => {
  try {
    const { name, area } = req.body;
    const field = await prisma.field.create({
      data: { name: name, area: area },
    });
    res.status(201).json({ field });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all field
export const getAllField = async (req, res) => {
  try {
    const allField = await prisma.field.findMany();
    res.status(200).json({ allField });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get field by id
export const getFieldById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedField = await prisma.field.findUnique({
      where: { id: id },
    });
    if (!selectedField) {
      return res.status(404).json({ message: "Process not found" });
    }
    res.status(200).json({ selectedField });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update field
export const updateField = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id);
    const { name: newName, area: newArea } = req.body;

    const updatedField = await prisma.field.update({
      where: { id: parsedId },
      data: {
        name: newName || undefined,
        area: parseFloat(newArea) || undefined,
      },
    });
    res.status(200).json({ updatedField });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete field
export const deleteField = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id);
    await prisma.field.delete({
      where: { id: parsedId },
    });
    res.status(201).json({ message: "Delete field success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

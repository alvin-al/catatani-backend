import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add field
export const createSubField = async (req, res) => {
  try {
    const { name, area, field_id } = req.body;
    const subfield = await prisma.sub_field.create({
      data: { name: name, area: area, field_id: field_id },
    });
    res.status(201).json({ subfield });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all field
export const getAllSubField = async (req, res) => {
  try {
    const allSubField = await prisma.sub_field.findMany();
    res.status(200).json({ allSubField });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get field by id
export const getSubFieldById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedSubField = await prisma.sub_field.findUnique({
      where: { id: id },
    });
    if (!selectedSubField) {
      return res.status(404).json({ message: "Process not found" });
    }
    res.status(200).json({ selectedSubField });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update field
export const updateSubField = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id);
    const { name: newName, area: newArea } = req.body;
    const parsedArea = parseFloat(newArea);
    const updatedSubField = await prisma.sub_field.update({
      where: { id: parsedId },
      data: {
        name: newName || undefined,
        area: parsedArea || undefined,
      },
    });
    res.status(200).json({ updatedSubField });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete field
export const deleteSubField = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id);
    await prisma.sub_field.delete({
      where: { id: parsedId },
    });
    res.status(201).json({ message: "Delete field success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

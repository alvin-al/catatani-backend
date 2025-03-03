import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add materialCategory
export const createMaterialCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const materialCategory = await prisma.material_category.create({
      data: { name },
    });
    res.status(201).json({ materialCategory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all materialCategory
export const getAllMaterialCategory = async (req, res) => {
  try {
    const allMaterialCategory = await prisma.material_category.findMany();
    res.status(200).json({ allMaterialCategory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get materialCategory by id
export const getMaterialCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const selectedMaterialCategory = await prisma.material_category.findUnique({
      where: { name },
    });
    if (!selectedMaterialCategory) {
      return res.status(404).json({ message: "Material category not found" });
    }
    res.status(200).json({ selectedMaterialCategory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update materialCategory
export const updateMaterialCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const { name: newName } = req.body;

    const updatedMaterialCategory = await prisma.material_category.update({
      where: { name },
      data: { name: newName },
    });
    res.status(200).json({ updatedMaterialCategory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete materialCategory
export const deleteMaterialCategory = async (req, res) => {
  try {
    const { name } = req.params;
    await prisma.material_category.delete({
      where: { name: name },
    });
    res.status(201).json({ message: "Delete material category success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

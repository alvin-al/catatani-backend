import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Material
export const createMaterial = async (req, res) => {
  try {
    const { name, uom_id, category_id } = req.body;

    const material = await prisma.material.create({
      data: {
        name,
        uom_id,
        category_id,
      },
    });

    res.status(201).json({ material });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Materials
export const getAllMaterials = async (req, res) => {
  try {
    const allMaterials = await prisma.material.findMany();
    res.status(200).json({ allMaterials });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Material by ID
export const getMaterialById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    const selectedMaterial = await prisma.material.findUnique({
      where: { id: parsedId },
    });

    if (!selectedMaterial) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.status(200).json({ selectedMaterial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Material
export const updateMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const { name, uom_id, category_id } = req.body;

    const updatedMaterial = await prisma.material.update({
      where: { id: parsedId },
      data: {
        name: name || undefined,
        uom_id: uom_id || undefined,
        category_id: category_id || undefined,
      },
    });

    res.status(200).json({ updatedMaterial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Material
export const deleteMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    await prisma.material.delete({
      where: { id: parsedId },
    });

    res.status(200).json({ message: "Delete material success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

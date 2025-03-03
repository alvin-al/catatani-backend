import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Material Usage
export const createMaterialUsage = async (req, res) => {
  try {
    const {
      usage_date,
      field_id,
      sub_field_id,
      proposal_id,
      commodity_id,
      farmer_id,
      activity_id,
      material_id,
      quantity,
      uom_id,
    } = req.body;

    const materialUsage = await prisma.material_usage.create({
      data: {
        usage_date: usage_date ? new Date(usage_date) : undefined,
        field_id: field_id ? parseInt(field_id, 10) : undefined,
        sub_field_id: sub_field_id ? parseInt(sub_field_id, 10) : undefined,
        proposal_id,
        commodity_id,
        farmer_id: farmer_id ? parseInt(farmer_id, 10) : undefined,
        activity_id,
        material_id: material_id ? parseInt(material_id, 10) : undefined,
        quantity: quantity ? parseFloat(quantity) : undefined,
        uom_id,
      },
    });

    res.status(201).json({ materialUsage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Material Usages
export const getAllMaterialUsages = async (req, res) => {
  try {
    const allMaterialUsages = await prisma.material_usage.findMany();
    res.status(200).json({ allMaterialUsages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Material Usage by ID
export const getMaterialUsageById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    const selectedMaterialUsage = await prisma.material_usage.findUnique({
      where: { id: parsedId },
    });

    if (!selectedMaterialUsage) {
      return res.status(404).json({ message: "Material usage not found" });
    }

    res.status(200).json({ selectedMaterialUsage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Material Usage
export const updateMaterialUsage = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const {
      usage_date,
      field_id,
      sub_field_id,
      proposal_id,
      commodity_id,
      farmer_id,
      activity_id,
      material_id,
      quantity,
      uom_id,
    } = req.body;

    const updatedMaterialUsage = await prisma.material_usage.update({
      where: { id: parsedId },
      data: {
        usage_date: usage_date ? new Date(usage_date) : undefined,
        field_id: field_id !== undefined ? parseInt(field_id, 10) : undefined,
        sub_field_id:
          sub_field_id !== undefined ? parseInt(sub_field_id, 10) : undefined,
        proposal_id: proposal_id || undefined,
        commodity_id: commodity_id || undefined,
        farmer_id:
          farmer_id !== undefined ? parseInt(farmer_id, 10) : undefined,
        activity_id: activity_id || undefined,
        material_id:
          material_id !== undefined ? parseInt(material_id, 10) : undefined,
        quantity: quantity !== undefined ? parseFloat(quantity) : undefined,
        uom_id: uom_id || undefined,
      },
    });

    res.status(200).json({ updatedMaterialUsage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Material Usage
export const deleteMaterialUsage = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    await prisma.material_usage.delete({
      where: { id: parsedId },
    });

    res.status(200).json({ message: "Delete material usage success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

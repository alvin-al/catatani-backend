import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Purchasing
export const createPurchasing = async (req, res) => {
  try {
    const {
      purchased_date,
      field_id,
      proposal_id,
      commodity_id,
      farmer_id,
      activity_id,
      material_id,
      quantity,
      uom_id,
      amount,
    } = req.body;

    const purchasing = await prisma.purchasing.create({
      data: {
        purchased_date: purchased_date ? new Date(purchased_date) : undefined,
        field_id: field_id ? parseInt(field_id, 10) : undefined,
        proposal_id,
        commodity_id,
        farmer_id: farmer_id ? parseInt(farmer_id, 10) : undefined,
        activity_id,
        material_id: material_id ? parseInt(material_id, 10) : undefined,
        quantity: quantity ? parseFloat(quantity) : undefined,
        uom_id,
        amount: amount ? parseFloat(amount) : undefined,
      },
    });

    res.status(201).json({ purchasing });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Purchasings
export const getAllPurchasings = async (req, res) => {
  try {
    const allPurchasings = await prisma.purchasing.findMany();
    res.status(200).json({ allPurchasings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Purchasing by ID
export const getPurchasingById = async (req, res) => {
  try {
    const { id } = req.params;

    const selectedPurchasing = await prisma.purchasing.findUnique({
      where: { id },
    });

    if (!selectedPurchasing) {
      return res.status(404).json({ message: "Purchasing not found" });
    }

    res.status(200).json({ selectedPurchasing });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Purchasing
export const updatePurchasing = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      purchased_date,
      field_id,
      proposal_id,
      commodity_id,
      farmer_id,
      activity_id,
      material_id,
      quantity,
      uom_id,
      amount,
    } = req.body;

    const updatedPurchasing = await prisma.purchasing.update({
      where: { id },
      data: {
        purchased_date: purchased_date ? new Date(purchased_date) : undefined,
        field_id: field_id !== undefined ? parseInt(field_id, 10) : undefined,
        proposal_id: proposal_id || undefined,
        commodity_id: commodity_id || undefined,
        farmer_id:
          farmer_id !== undefined ? parseInt(farmer_id, 10) : undefined,
        activity_id: activity_id || undefined,
        material_id:
          material_id !== undefined ? parseInt(material_id, 10) : undefined,
        quantity: quantity !== undefined ? parseFloat(quantity) : undefined,
        uom_id: uom_id || undefined,
        amount: amount !== undefined ? parseFloat(amount) : undefined,
      },
    });

    res.status(200).json({ updatedPurchasing });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Purchasing
export const deletePurchasing = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.purchasing.delete({
      where: { id },
    });

    res.status(200).json({ message: "Delete purchasing success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

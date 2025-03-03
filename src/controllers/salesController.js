import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Sales
export const createSales = async (req, res) => {
  try {
    const { sales_date, commodity_id, proposal_id, qty, price } = req.body;

    const sales = await prisma.sales.create({
      data: {
        sales_date: sales_date ? new Date(sales_date) : undefined,
        commodity_id,
        proposal_id,
        qty: qty ? parseFloat(qty) : undefined,
        price: price ? parseFloat(price) : undefined,
      },
    });

    res.status(201).json({ sales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Sales
export const getAllSales = async (req, res) => {
  try {
    const allSales = await prisma.sales.findMany();
    res.status(200).json({ allSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Sales by ID
export const getSalesById = async (req, res) => {
  try {
    const { id } = req.params;

    const selectedSales = await prisma.sales.findUnique({
      where: { id },
    });

    if (!selectedSales) {
      return res.status(404).json({ message: "Sales not found" });
    }

    res.status(200).json({ selectedSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Sales
export const updateSales = async (req, res) => {
  try {
    const { id } = req.params;
    const { sales_date, commodity_id, proposal_id, qty, price } = req.body;

    const updatedSales = await prisma.sales.update({
      where: { id },
      data: {
        sales_date: sales_date ? new Date(sales_date) : undefined,
        commodity_id: commodity_id || undefined,
        proposal_id: proposal_id || undefined,
        qty: qty !== undefined ? parseFloat(qty) : undefined,
        price: price !== undefined ? parseFloat(price) : undefined,
      },
    });

    res.status(200).json({ updatedSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Sales
export const deleteSales = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.sales.delete({
      where: { id },
    });

    res.status(200).json({ message: "Delete sales success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

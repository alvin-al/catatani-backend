import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add process
export const createProcess = async (req, res) => {
  try {
    const { name } = req.body;
    const process = await prisma.process.create({
      data: { name },
    });
    res.status(201).json({ process });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all process
export const getAllProcess = async (req, res) => {
  try {
    const allProcess = await prisma.process.findMany();
    res.status(200).json({ allProcess });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get process by id
export const getProcessByName = async (req, res) => {
  try {
    const { name } = req.params;
    const selectedProcess = await prisma.process.findUnique({
      where: { name },
    });
    if (!selectedProcess) {
      return res.status(404).json({ message: "Process not found" });
    }
    res.status(200).json({ selectedProcess });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update process
export const updateProcess = async (req, res) => {
  try {
    const { name } = req.params;
    const { name: newName } = req.body;

    const updatedProcess = await prisma.process.update({
      where: { name },
      data: { name: newName },
    });
    res.status(200).json({ updatedProcess });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete process
export const deleteProcess = async (req, res) => {
  try {
    const { name } = req.params;
    await prisma.process.delete({
      where: { name: name },
    });
    res.status(201).json({ message: "Delete process success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

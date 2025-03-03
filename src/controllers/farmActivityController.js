import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Add farmActivity
export const createFarmActivity = async (req, res) => {
  try {
    const { name, activity_description } = req.body;
    const farmActivity = await prisma.farm_activity.create({
      data: { name, activity_description },
    });
    res.status(201).json({ farmActivity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all farmActivity
export const getAllFarmActivity = async (req, res) => {
  try {
    const allFarmActivity = await prisma.farm_activity.findMany();
    res.status(200).json({ allFarmActivity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get farmActivity by id
export const getFarmActivityByName = async (req, res) => {
  try {
    const { name } = req.params;
    const selectedFarmActivity = await prisma.farm_activity.findUnique({
      where: { name },
    });
    if (!selectedFarmActivity) {
      return res.status(404).json({ message: "farm activity not found" });
    }
    res.status(200).json({ selectedFarmActivity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update farmActivity
export const updateFarmActivity = async (req, res) => {
  try {
    const { name } = req.params;
    const { name: newName, activity_description: newActivity } = req.body;

    const updatedFarmActivity = await prisma.farm_activity.update({
      where: { name },
      data: {
        name: newName || undefined,
        activity_description: newActivity || undefined,
      },
    });
    res.status(200).json({ updatedFarmActivity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete farmActivity
export const deleteFarmActivity = async (req, res) => {
  try {
    const { name } = req.params;
    await prisma.farm_activity.delete({
      where: { name: name },
    });
    res.status(201).json({ message: "Delete farm activity success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

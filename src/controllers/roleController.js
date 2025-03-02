import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Create role
export const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = await prisma.role.create({
      data: { name },
    });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all roles
export const getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();
    res.status(201).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get role by ID
export const getRoleById = async (res, req) => {
  try {
    const name = req.params;
    const role = await prisma.role.findUnique({
      where: { name: name },
    });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a role
// Update a role by name
export const updateRole = async (req, res) => {
  try {
    const { oldName } = req.params; // Ambil nama lama dari URL
    const { name: newName } = req.body; // Ambil nama baru dari body

    // Validasi input
    if (!newName || typeof newName !== "string" || newName.trim() === "") {
      return res
        .status(400)
        .json({ message: "Name is required and must be a valid string" });
    }

    // Update data di database
    const updatedRole = await prisma.role.update({
      where: { name: oldName }, // Cari berdasarkan `name`
      data: { name: newName }, // Perbarui nama
    });

    // Kirim respons ke client
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete role
export const deleteRole = async (req, res) => {
  try {
    const { name } = req.params;
    await prisma.role.delete({
      where: { name: name },
    });
    res.status(200).json({ message: "Delete role success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

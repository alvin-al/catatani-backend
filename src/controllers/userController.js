import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create User
export const createUser = async (req, res) => {
  try {
    const { username, role_id } = req.body;

    const user = await prisma.user.create({
      data: {
        username,
        role_id,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const selectedUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!selectedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ selectedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, role_id } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        username: username || undefined,
        role_id: role_id || undefined,
      },
    });

    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "Delete user success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

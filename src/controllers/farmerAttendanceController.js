import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Farmer Attendance
export const createFarmerAttendance = async (req, res) => {
  try {
    const {
      farmer_id,
      field_id,
      sub_field_id,
      proposal_id,
      activity_id,
      commodity_id,
      working_date,
      start_time,
      end_time,
    } = req.body;

    const farmerAttendance = await prisma.farmer_attendance.create({
      data: {
        farmer_id: parseInt(farmer_id, 10),
        field_id: field_id ? parseInt(field_id, 10) : undefined,
        sub_field_id: sub_field_id ? parseInt(sub_field_id, 10) : undefined,
        proposal_id,
        activity_id,
        commodity_id,
        working_date: working_date ? new Date(working_date) : undefined,
        start_time: start_time
          ? new Date(`1970-01-01T${start_time}`)
          : undefined,
        end_time: end_time ? new Date(`1970-01-01T${end_time}`) : undefined,
      },
    });

    res.status(201).json({ farmerAttendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Farmer Attendances
export const getAllFarmerAttendances = async (req, res) => {
  try {
    const allFarmerAttendances = await prisma.farmer_attendance.findMany();
    res.status(200).json({ allFarmerAttendances });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Farmer Attendance by ID
export const getFarmerAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    const selectedFarmerAttendance = await prisma.farmer_attendance.findUnique({
      where: { id: parsedId },
    });

    if (!selectedFarmerAttendance) {
      return res.status(404).json({ message: "Farmer attendance not found" });
    }

    res.status(200).json({ selectedFarmerAttendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Farmer Attendance
export const updateFarmerAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    const {
      farmer_id,
      field_id,
      sub_field_id,
      proposal_id,
      activity_id,
      commodity_id,
      working_date,
      start_time,
      end_time,
    } = req.body;

    const updatedFarmerAttendance = await prisma.farmer_attendance.update({
      where: { id: parsedId },
      data: {
        farmer_id:
          farmer_id !== undefined ? parseInt(farmer_id, 10) : undefined,
        field_id: field_id !== undefined ? parseInt(field_id, 10) : undefined,
        sub_field_id:
          sub_field_id !== undefined ? parseInt(sub_field_id, 10) : undefined,
        proposal_id: proposal_id || undefined,
        activity_id: activity_id || undefined,
        commodity_id: commodity_id || undefined,
        working_date: working_date ? new Date(working_date) : undefined,
        start_time: start_time
          ? new Date(`1970-01-01T${start_time}`)
          : undefined,
        end_time: end_time ? new Date(`1970-01-01T${end_time}`) : undefined,
      },
    });

    res.status(200).json({ updatedFarmerAttendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Farmer Attendance
export const deleteFarmerAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    await prisma.farmer_attendance.delete({
      where: { id: parsedId },
    });

    res.status(200).json({ message: "Delete farmer attendance success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

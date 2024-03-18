import { response } from "express";
import UserRole from "../models/userRoleSchema.js";


const getJoinedPepole = async (req, res) => {
    try {
        const { classroomID } = req.body;
        const user = req.user; // Assuming req.user contains the user object

        // Check if the user has access to the classroom
        const userRole = await UserRole.findOne({ user, classroom: classroomID });
        if (!userRole) {
            return res.status(401).json({ message: "Unauthorized, You don't have access to this class" });
        }

        const joinedStudents= await UserRole.find({ classroom: classroomID, role: "student" }).populate("user", "userName email avatar").select("-updatedAt -createdAt -isArchived");
        const joinedTeachers= await UserRole.find({ classroom: classroomID, role: "teacher" }).populate("user", "userName email avatar").select("-updatedAt -createdAt -isArchived");
        const response={
            joinedStudents,
            joinedTeachers
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error getting joined pepole:", error);
        res.status(500).json({ message: "Error getting joined pepole" });
    }
}

export { getJoinedPepole };
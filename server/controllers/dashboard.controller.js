import mongoose from "mongoose";
import Classroom from "../models/classroomSchema.js";
import User from "../models/UserSchema.js";
import UserRole from "../models/userRoleSchema.js";

const createClassroom = async (req, res) => {
    const { className, subject, batch } = req.body;
    // console.log(req.user._id);
    // console.log(req);
    const owner = req.user._id;
    const classroom = new Classroom({
        className,
        subject,
        batch,
        owner,
    });
    try {
        await classroom.save();
        res.status(201).json(classroom);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    };

const getJoinedClass = async (req, res) => {
    try {
        const userId = req.user._id;
        const classrooms = await UserRole.find({ user:userId }).populate("classroomId").exec();
        res.status(200).json(classrooms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}   

const joinClassroom = async (req, res) => {
    const { classCode } = req.body;
    const userId = req.user._id;

    try {
        const classroom = await Classroom.findOne({ _id: classCode });
        if (!classroom) {
            return res.status(404).json({ message: "Classroom not found" });
        }

        const userRoleExists = await UserRole.findOne({ user: userId, classroom: classCode });
        if (userRoleExists) {
            return res.status(409).json({ message: "Already joined" });
        }

        const userRole = new UserRole({
            user: userId,
            classroom: classCode,
            role: "student"
        });

        await userRole.save();
        return res.status(200).json(userRole);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};


export { createClassroom, getJoinedClass, joinClassroom };
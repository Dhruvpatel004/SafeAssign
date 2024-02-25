import mongoose from "mongoose";
import Classroom from "../models/classroomSchema.js";
import User from "../models/UserSchema.js";
import UserRole from "../models/userRoleSchema.js";
import Announcement from "../models/announcementSchema.js";

const addAnnouncement = async (req, res) => {
    const { classroomID, text, urls } = req.body;
    const mediaFilesPaths = req.files?.map(file => file.path);
    const owner = req.user._id;
    const classroom = await Classroom.findById(classroomID);
    if (!classroom) {
        return res.status(404).json({ message: "Classroom not found" });
    }

    const userRole = await UserRole.findOne({ user: owner, classroom: classroomID });
    if (!userRole) {
        return res.status(404).json({ message: "User not found in classroom" });
    }



    const uploadedMediaUrls = [];

    for (const filePath of mediaFilesPaths) {
        try {
            const uploadedMedia = await uploadOnCloudinary(filePath);
            if (uploadedMedia.url) {
                uploadedMediaUrls.push(uploadedMedia.url);
            } else {
                return res.status(500).json({ message: "Error uploading media file" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error uploading media file" });
        }
    }
    

    const announcement = new Announcement({
        text,
        links: urls,
        mediaFiles: mediaFilesPaths,
        postedBy: owner,
        postedIn: classroomID
    });
    try {
        await announcement.save();
        
        res.status(201).json(announcement);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}  
export { addAnnouncement };

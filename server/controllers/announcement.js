import { uploadOnCloudinary } from "../utils/cloudinary.js";

// import Classroom from "../models/classroomSchema.js";
import Announcement from "../models/announcementSchema.js";
import UserRole from "../models/userRoleSchema.js";
import User from "../models/UserSchema.js";
import e from "express";


const addAnnouncement = async (req, res) => {
    try {
        const { classroomID, text, urls } = req.body;

        // console.log(req.body);
        const user = req.user; // Assuming req.user contains the user object
  

        // Check if the user has access to the classroom
        const userRole = await UserRole.findOne({ user, classroom: classroomID });
        if (!userRole) {
            return res.status(401).json({ message: "Unauthorized, You don't have access to this class" });
        }

        const uploadedFilesURL = [];
        const uploadedImgsURL = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                try {
                    function isImageFile(fileName) {
                        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
                        const extension = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
                        return imageExtensions.includes(extension);
                    }

                    const uploadedMedia = await uploadOnCloudinary(file.path);
                    if (uploadedMedia.url) {
                        const fileName = file.originalname;
                    
                        if (isImageFile(fileName)) {
                            uploadedImgsURL.push({ fileName, url: uploadedMedia.url });
                        }
                        else{
                            uploadedFilesURL.push({ fileName, url: uploadedMedia.url });
                        }
                    } else {
                        return res.status(500).json({ message: "Error uploading media file" });
                    }
                    // if (uploadedMedia.url) {
                    //     const fileName = file.originalname;
                    //     uploadedFilesURL.push({ fileName, url: uploadedMedia.url });
                    // } else {
                    //     return res.status(500).json({ message: "Error uploading media file" });
                    // }
                } catch (error) {
                    console.error("Error uploading media file:", error);
                    return res.status(500).json({ message: "Error uploading media file" });
                }
            }
        }

        const newAnnouncement = new Announcement({
            postedIn: classroomID,
            text: text? text : "",
            links: urls,
            mediaImgs: uploadedImgsURL,
            mediaFiles: uploadedFilesURL,
            postedBy: req.user._id,
          
        });
        const savedAnnouncement = await newAnnouncement.save()
        
        const owner = {

            postedBy:
            {
                _id: req.user._id,
                userName: req.user.userName,
                avatar: req.user.avatar,
            } 
        };
        const responseAnnouncement = {
            ...savedAnnouncement._doc,
            ...owner,
        };

        res.status(201).json(responseAnnouncement);
    } catch (error) {
        console.error("Error adding announcement:", error);
        res.status(500).json({ message: "Error adding announcement" });
    }
};

const getAnnouncements = async (req, res) => {
    try {
        const classroomID  = req.body.classroomID;

        const userID = req.user._id; // Assuming req.user contains the user object
        
        console.log(classroomID);
        console.log(userID);

        // Check if the user has access to the classroom
        const userRole = await UserRole.findOne({ user: userID, classroom: classroomID });
        if (!userRole) {
            return res.status(401).json({ message: "Unauthorized, You don't have access to this class" });
        }
        else{
            console.log("You have access to this class");
        }
  
        const announcements = await Announcement.find({ postedIn: classroomID })
            .populate("postedBy", "userName avatar")
            .sort({ createdAt: -1 });
        
            res.status(200).json(announcements);
        // res.status(200).json(announcements);
    } catch (error) {
        console.error("Error getting announcements:", error);
        res.status(500).json({ message: "Error getting announcements" });
    }
}

export { addAnnouncement ,getAnnouncements};


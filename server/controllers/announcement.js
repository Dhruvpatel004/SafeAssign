import {uploadOnCloudinary} from "../utils/cloudinary.js";

// import Classroom from "../models/classroomSchema.js";
import Announcement from "../models/announcementSchema.js";
import UserRole from "../models/userRoleSchema.js";


const addAnnouncement = async (req, res) => {
    try {
        const { classroomID, text, urls } = req.body;

        console.log(req.body);
        const user = req.user; // Assuming req.user contains the user object

        // Check if the user has access to the classroom
        const userRole = await UserRole.findOne({ user, classroom: classroomID });
        if (!userRole) {
            return res.status(401).json({ message: "Unauthorized, You don't have access to this class" });
        }

        const uploadedFilesURL = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                try {
                    const uploadedMedia = await uploadOnCloudinary(file.path);
                    if (uploadedMedia.url) {
                        const fileName = file.originalname;
                        uploadedFilesURL.push({ fileName, url: uploadedMedia.url });
                    } else {
                        return res.status(500).json({ message: "Error uploading media file" });
                    }
                } catch (error) {
                    console.error("Error uploading media file:", error);
                    return res.status(500).json({ message: "Error uploading media file" });
                }
            }
        }

        const newAnnouncement = new Announcement({
            postedIn: classroomID,
            text: text,
            links: urls,
            mediaFiles: uploadedFilesURL,
            postedBy: req.user._id,
        });

        const savedAnnouncement = await newAnnouncement.save();
        res.status(201).json(savedAnnouncement);
    } catch (error) {
        console.error("Error adding announcement:", error);
        res.status(500).json({ message: "Error adding announcement" });
    }
};

export { addAnnouncement };


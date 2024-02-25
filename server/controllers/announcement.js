import {uploadOnCloudinary} from "../utils/cloudinary.js";
const addAnnouncement = async (req, res) => {
    const { classroomID, text, urls } = req.body;
    console.log(req.body);
    // console.log(req.files);
    const uplodedFilesURl = [];
    if(req.files){
        for (const file of req.files) {
            try {
                const uploadedMedia = await uploadOnCloudinary(file.path);
                if (uploadedMedia.url) {
                    uplodedFilesURl.push(uploadedMedia.url);
                } else {
                    return res.status(500).json({ message: "Error uploading media file" });
                }
            } catch (error) {
                return res.status(500).json({ message: "Error uploading media file" });
            }
        }
    }
    res.send(uplodedFilesURl);

    }

export { addAnnouncement };
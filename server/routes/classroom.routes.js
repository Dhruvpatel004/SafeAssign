import { Router } from 'express';
import isAuthenticated from '../middleware/authMiddleware.js';
const router = Router();
import upload from '../multer.js';
import {addAnnouncement,getAnnouncements} from "../controllers/announcement.js";

router.use(isAuthenticated);

// router.route("/add-announcement").post(addAnnouncement);
router.route("/add-announcement").post(upload.array('files'),addAnnouncement);
router.route("/get-announcements").post(getAnnouncements);





export default router
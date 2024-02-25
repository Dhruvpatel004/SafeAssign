import { Router } from 'express';
import isAuthenticated from '../middleware/authMiddleware.js';
const router = Router();

import { getJoinedClass, createClassroom, joinClassroom } from '../controllers/dashboard.controller.js';
import { addAnnouncement } from '../controllers/classroom.controller.js';


router.use(isAuthenticated);


router.route("/getJoinedClass").get(getJoinedClass);
router.route("/create-classroom").post(createClassroom);
router.route("/join-classroom").post(joinClassroom);
// router.route("/add-announcement").patch(upload.array("mediaFiles"), addAnnouncement);

// router.route("/archive-classroom").get(archiveClassroom);
// router.route("/Unenroll-classroom").get(unenrollClassroom);    


export default router
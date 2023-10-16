import express from "express";
const router = express.Router();
import { registerUser, loginUser, userProfile, updateProfile, updateProfilePicture } from "../controllers/userControllers";
import { authGuard } from "../middleware/authMiddleware";

//create Api end point
// (path, controller)
// registerUser comes from userController
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authGuard, userProfile);
router.put('/updateProfile', authGuard, updateProfile);
router.put('/updateProfilePicture', authGuard, updateProfilePicture);

export default router;

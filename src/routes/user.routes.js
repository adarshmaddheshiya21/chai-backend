import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();
// import multer for file uploading
import {upload} from "../controllers/multer.middleware.js"

router.route('/register').post(
    upload.fields(
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ),
    registerUser)


export default router
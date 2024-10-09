import { Authorization } from "../../common/guard/authorization.guard.js";
import { Router } from "express";

import authController from "./auth.controller.js";

const router = Router();

router.post("/send-otp", authController.sendOTP);
router.post("/check-otp", authController.checkOTP);
router.get("/logout", Authorization, authController.logout);

export const AuthRouter = router;

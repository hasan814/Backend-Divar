import { Router } from "express";

const router = Router();

router.post("/send-otp", authController.sendOTP);
router.post("/check-otp", authController.checkOTP);

module.exports = { AuthRouter: router };

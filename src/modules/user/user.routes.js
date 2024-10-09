import { Authorization } from "../../common/guard/authorization.guard.js";
import { Router } from "express";

import userController from "./user.controller.js";

const router = Router();

router.post("/whoami", Authorization, userController.whoami);

export const UserRouter = router;

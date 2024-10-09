import { AuthRouter } from "./modules/auth/auth.routes.js";
import { UserRouter } from "./modules/user/user.routes.js";
import { Router } from "express";

const mainRouter = Router();
mainRouter.use("/auth", AuthRouter);
mainRouter.use("/user", UserRouter);

export default mainRouter;

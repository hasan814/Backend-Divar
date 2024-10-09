import { Router } from "express";
import { AuthRouter } from "./modules/auth/auth.routes.js";

const mainRouter = Router();
mainRouter.use("/auth", AuthRouter);

export default mainRouter;

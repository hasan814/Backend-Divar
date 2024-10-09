import { AuthorizationMessage } from "../message/auth.message.js";

import createHttpError from "http-errors";
import UserModel from "../../modules/user/user.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const Authorization = async (req, res, next) => {
  try {
    const token = req?.cookie?.access_token;
    if (!token)
      throw new createHttpError.Unauthorized(AuthorizationMessage.login);
    const data = jwt.verify(token, process.env.JWT_SECRET);
    if (data?.id) {
      const user = await UserModel.findById(data.id, {
        accessToken: 0,
        otp: 0,
      }).lean();
      if (typeof data === "object" && "id" in data)
        throw new createHttpError.Unauthorized(AuthorizationMessage.login);
      req.user = user;
      return next();
    }
    throw new createHttpError.Unauthorized(Authorization.InvalidToken);
  } catch (error) {
    next(error);
  }
};

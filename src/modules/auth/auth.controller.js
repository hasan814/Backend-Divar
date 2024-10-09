import { AuthMessage } from "./auth.message.js";
import { NodeEnv } from "../../common/env.enum.js";

import authService from "./auth.service.js";
import autoBind from "auto-bind";

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      await this.#service.sendOTP(mobile);
      return res.status(200).json({
        message: AuthMessage.SendOtpSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const token = await this.#service.checkOTP(mobile, code);
      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === NodeEnv.Production,
        })
        .status(200)
        .json({ message: AuthMessage.LoginSuccessfully });
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();

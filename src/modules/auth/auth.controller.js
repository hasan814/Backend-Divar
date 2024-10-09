import { AuthMessage } from "./auth.message";

import authService from "./auth.service";
import autoBind from "auto-bind";

class AuthController {
  #service;
  constructor() {
    autoBind();
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      await this.#service.sendOTP(mobile);
      return {
        message: AuthMessage.SendOtpSuccessfully,
      };
    } catch (error) {}
  }
  async checkOTP(req, res, next) {
    try {
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

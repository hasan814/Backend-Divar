import authService from "./auth.service";

class AuthController {
  #service;
  constructor() {
    this.#service = authService;
  }
  async sendOTP(req, res, next) {}
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

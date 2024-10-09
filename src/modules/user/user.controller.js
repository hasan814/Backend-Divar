import { UserMessage } from "./user.messages.js";
import { NodeEnv } from "../../common/env.enum.js";

import userService from "./user.service.js";
import autoBind from "auto-bind";

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = userService;
  }
  async whoami(req, res, next) {
    try {
      const user = req.user;
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();

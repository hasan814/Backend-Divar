import createHttpError from "http-errors";
import UserModel from "../user/user.model.js";
import autoBind from "auto-bind";
import jwt from "jsonwebtoken";

class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
}

export default new UserService();

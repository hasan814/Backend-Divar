import { Schema } from "mongoose";

const OTPSchema = new Schema({
  code: { type: String, required: false },
  expiresIn: { type: Number, required: false, default: 0 },
});

const UserSchema = new Schema(
  {
    fullName: { type: String, required: false },
    mobile: { type: String, unique: true, required: true },
    otp: { type: OTPSchema },
    verifiedMobile: { type: Boolean, default: false, require: true },
  },
  { timestamps: true }
);

const UserModel = model("user", UserSchema);
export default UserModel;

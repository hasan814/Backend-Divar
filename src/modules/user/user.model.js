import { model, Schema } from "mongoose";

const OTPSchema = new Schema({
  code: { type: String, required: false },
  expiresIn: { type: Number, required: false, default: 0 },
});

const UserSchema = new Schema(
  {
    otp: { type: OTPSchema },
    accessToken: { type: String },
    fullName: { type: String, required: false },
    mobile: { type: String, unique: true, required: true },
    verifiedMobile: { type: Boolean, default: false, require: true },
  },
  { timestamps: true }
);

const UserModel = model("user", UserSchema);
export default UserModel;

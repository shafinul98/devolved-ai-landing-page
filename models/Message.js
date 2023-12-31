import { Schema, models, model } from "mongoose";

const MessageSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

export default models.Message ?? model("Message", MessageSchema);

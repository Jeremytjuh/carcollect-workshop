import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, trim: true },
  first_name: String,
  last_name: String,
}, {
  timestamps: true,
});

const user = mongoose.model("User", schema);

export default user;

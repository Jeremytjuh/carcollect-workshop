import mongoose from "mongoose";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  bio: String,
  country: String,
  city: String,
  image: String,
}, {
  timestamps: true,
});

const user = mongoose.model("User", schema);

export default user;

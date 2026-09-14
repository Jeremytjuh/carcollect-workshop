import mongoose from "mongoose";

// Assignment 3
// ----------------------------------------------------------------
// Add Birth Date as an input in the profile update form and add it to the User model
const schema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, trim: true },
  first_name: String,
  last_name: String,
  phone_number: Number,
  birth_date: Date,
  status: String,
  bio: String,
  tagline: String,
  username: String,
  favorite_types: [String],
  city: String,
  country: String
}, {
  timestamps: true,
});

const user = mongoose.model("User", schema);

export default user;

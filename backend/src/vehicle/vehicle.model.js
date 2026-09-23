import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  model: String,
  version: String,
  type: String,
  license_plate: String,
  image: String,

  // Mongoose schemas
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true,
});

const vehicle = mongoose.model("Vehicle", schema);

export default vehicle;

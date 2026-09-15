import mongoose from "mongoose";

// Utils
import { VEHICLE_TYPE } from "../utils/constants/vehicle.const.js"

const schema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  model: String,
  version: String,
  type: { type: String, enum: Object.values(VEHICLE_TYPE) },
  license_plate: String,
  image: String,

  // Mongoose schemas
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
  timestamps: true,
});

const vehicle = mongoose.model("Vehicle", schema);

export default vehicle;

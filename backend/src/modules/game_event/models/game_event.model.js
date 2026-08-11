import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
}, {
  timestamps: true,
});

const gameEvent = mongoose.model("GameEvent", schema);

export default gameEvent;

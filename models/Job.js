const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  shipmentType: String,
  shipmentWeight: Number,
  startingCity: String,
  endingCity: String,
  startingDate: Date,
  endingDate: Date,
  shipmentCost: Number,
  senderPhone: String,
  receiverPhone: String,
  isAssigned: { type: Boolean, default: false },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Job", jobSchema);

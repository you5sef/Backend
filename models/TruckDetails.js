const mongoose = require("mongoose");

const truckDetailsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  truckType: String,
  truckModel: String,
  maximumWeight: Number,
  fuelType: String,
  truckLicense: String,
  dimensions: String,
  truckPlate: String
});

module.exports = mongoose.model("TruckDetails", truckDetailsSchema);

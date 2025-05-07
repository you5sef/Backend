const mongoose = require("mongoose");

const driverDetailsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  phone: String,
  companyName: String,
  nationalId: String,
  email: String,
  driverLicense: String,
  idCard: String
});

module.exports = mongoose.model("DriverDetails", driverDetailsSchema);

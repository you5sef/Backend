const DriverDetails = require("../models/DriverDetails");
const TruckDetails = require("../models/TruckDetails");

exports.saveDriverDetails = async (req, res) => {
  const { name, phone, companyName, nationalId, email, driverLicense, idCard } = req.body;
  try {
    const details = new DriverDetails({ user: req.user.userId, name, phone, companyName, nationalId, email, driverLicense, idCard });
    await details.save();
    res.status(201).json({ message: "Driver details saved" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.saveTruckDetails = async (req, res) => {
  const { truckType, truckModel, maximumWeight, fuelType, truckLicense, dimensions, truckPlate } = req.body;
  try {
    const details = new TruckDetails({ user: req.user.userId, truckType, truckModel, maximumWeight, fuelType, truckLicense, dimensions, truckPlate });
    await details.save();
    res.status(201).json({ message: "Truck details saved" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

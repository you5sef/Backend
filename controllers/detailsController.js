const DriverDetails = require("../models/DriverDetails");
const TruckDetails = require("../models/TruckDetails");
const ShipmentDetails = require("../models/ShipmentDetails"); // استدعاء الموديل
const Job = require("../models/Job");

exports.saveDriverDetails = async (req, res) => {
  const { name, phone, companyName, nationalId, email, driverLicense, idCard } = req.body;
  try {
    const details = new DriverDetails({ user: req.user.userId, name, phone, companyName, nationalId, email, driverLicense, idCard });
    await details.save();
    
    // إنشاء وظيفة جديدة عند حفظ بيانات السائق
    const newJob = new Job({
      user: req.user.userId,
      isAssigned: false
    });
    await newJob.save();
    
    res.status(201).json({ message: "Driver details saved and job created" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.saveTruckDetails = async (req, res) => {
  const { truckType, truckModel, maximumWeight, fuelType, truckLicense, dimensions, truckPlate } = req.body;
  try {
    const details = new TruckDetails({ user: req.user.userId, truckType, truckModel, maximumWeight, fuelType, truckLicense, dimensions, truckPlate });
    await details.save();
    
    // إنشاء وظيفة جديدة عند حفظ بيانات الشاحنة
    const newJob = new Job({
      user: req.user.userId,
      isAssigned: false
    });
    await newJob.save();
    
    res.status(201).json({ message: "Truck details saved and job created" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.saveShipmentDetails = async (req, res) => {
  const {
    shipmentType,
    shipmentWeight,
    startingCity,
    endingCity,
    startingDate,
    endingDate,
    shipmentCost,
    senderPhone,
    receiverPhone
  } = req.body;

  try {
    const details = new ShipmentDetails({
      user: req.user.userId,
      shipmentType,
      shipmentWeight,
      startingCity,
      endingCity,
      startingDate,
      endingDate,
      shipmentCost,
      senderPhone,
      receiverPhone
    });

    await details.save();
    
    // إنشاء وظيفة جديدة عند حفظ بيانات الشحنة
    const newJob = new Job({
      user: req.user.userId,
      shipmentType,
      shipmentWeight,
      startingCity,
      endingCity,
      startingDate,
      endingDate,
      shipmentCost,
      senderPhone,
      receiverPhone,
      isAssigned: false
    });
    await newJob.save();
    
    res.status(201).json({ message: "Shipment details saved and job created" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

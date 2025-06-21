const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    const DriverDetails = require("../models/DriverDetails");
    const ShipmentDetails = require("../models/ShipmentDetails");
    const TruckDetails = require("../models/TruckDetails");

    const jobsWithSelectedDetails = await Promise.all(jobs.map(async (job) => {
      const userId = job.user || job.assignedTo;
      const driverDetails = await DriverDetails.findOne({ user: userId });
      const shipmentDetails = await ShipmentDetails.findOne({ user: userId });
      const truckDetails = await TruckDetails.findOne({ user: userId });
      return {
        _id: job._id,
        driverName: driverDetails ? driverDetails.name : null,
        truckModel: truckDetails ? truckDetails.truckModel : null,
        shipmentWeight: shipmentDetails ? shipmentDetails.shipmentWeight : null,
        startingCity: shipmentDetails ? shipmentDetails.startingCity : null,
        endingCity: shipmentDetails ? shipmentDetails.endingCity : null,
        startingDate: shipmentDetails ? shipmentDetails.startingDate : null
      };
    }));
    res.status(200).json(jobsWithSelectedDetails);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

exports.acceptJob = async (req, res) => {
  const jobId = req.params.id;
  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    job.isAssigned = true;
    job.assignedTo = req.user.userId;
    await job.save();

    res.status(200).json({ message: "Job accepted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

// New controller to get all details for a specific job (for review button)
exports.getJobDetails = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    const DriverDetails = require("../models/DriverDetails");
    const ShipmentDetails = require("../models/ShipmentDetails");
    const TruckDetails = require("../models/TruckDetails");
    const userId = job.user || job.assignedTo;
    const driverDetails = await DriverDetails.findOne({ user: userId });
    const shipmentDetails = await ShipmentDetails.findOne({ user: userId });
    const truckDetails = await TruckDetails.findOne({ user: userId });
    res.status(200).json({ job, driverDetails, shipmentDetails, truckDetails });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

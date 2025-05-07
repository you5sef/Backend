const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
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

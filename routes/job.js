const express = require("express");
const router = express.Router();
const { getJobs, acceptJob } = require("../controllers/jobController");
const auth = require("../middleware/auth");

router.get("/", auth, getJobs);
router.post("/:id/accept", auth, acceptJob);
router.get("/:id/review", auth, require("../controllers/jobController").getJobDetails);

module.exports = router;

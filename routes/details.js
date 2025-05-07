const express = require("express");
const router = express.Router();
const { saveDriverDetails, saveTruckDetails } = require("../controllers/detailsController");
const auth = require("../middleware/auth");

router.post("/driver", auth, saveDriverDetails);
router.post("/truck", auth, saveTruckDetails);

module.exports = router;

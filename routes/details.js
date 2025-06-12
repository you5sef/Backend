const express = require("express");
const router = express.Router();
const { saveDriverDetails, saveTruckDetails, saveShipmentDetails } = require("../controllers/detailsController");
const auth = require("../middleware/auth");

router.post("/driver", auth, saveDriverDetails);
router.post("/truck", auth, saveTruckDetails);
router.post("/shipment", auth, saveShipmentDetails);

module.exports = router;

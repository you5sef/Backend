
const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shipmentType: { type: String, required: true },
  shipmentWeight: { type: Number, required: true },
  startingCity: { type: String, required: true },
  endingCity: { type: String, required: true },
  startingDate: { type: Date, required: true },
  endingDate: { type: Date, required: true },
  shipmentCost: { type: Number, required: true },
  senderPhone: { type: String, required: true },
  receiverPhone: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('ShipmentDetails', shipmentSchema);

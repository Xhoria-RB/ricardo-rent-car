const { Schema, model } = require('mongoose');

const InspectionSchema = new Schema({
  entityName: { type: String, default: 'inspection' },
  carID: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  clientID: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  employeeID: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  scratches: { type: Boolean, default: false },
  extraTire: { type: Boolean, default: false },
  lever: { type: Boolean, default: false },
  brokenGlass: { type: Boolean, default: false },
  firstTire: { type: Boolean, default: false },
  secondTire: { type: Boolean, default: false },
  thirdTire: { type: Boolean, default: false },
  fourthTire: { type: Boolean, default: false },
  fuelQt: { type: Number, required: true },
  inspectionDate: { type: Date, default: Date.now() },
  status: { type: Boolean, default: true }
});

module.exports = model('Inspection', InspectionSchema);

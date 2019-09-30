const { Schema, model } = require('mongoose');

const InspectionSchema = new Schema({
  entityName: { type: String, default: 'inspection' },
  carID: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  clientID: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  employeeID: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  scratches: { type: Boolean, required: true },
  extraTire: { type: Boolean, required: true },
  lever: { type: Boolean, required: true },
  brokenGlass: { type: Boolean, required: true },
  firstTire: { type: Boolean, required: true },
  secondTire: { type: Boolean, required: true },
  thirdTire: { type: Boolean, required: true },
  fourthTire: { type: Boolean, required: true },
  fuelQt: { type: Number, required: true },
  inspectionDate: { type: Date, required: true },
  status: { type: Boolean, default: true }
});

module.exports = model('Inspection', InspectionSchema);

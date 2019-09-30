const { Schema, model } = require('mongoose');

const CarSchema = new Schema({
  entityName: { type: String, default: 'car' },
  description: { type: String, required: true },
  chasisNO: { type: String, required: true },
  motorNO: { type: String, required: true },
  plateNO: { type: String, required: true },
  carTypeID: { type: Schema.Types.ObjectId, ref: 'CarType', required: true },
  brandID: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
  modelID: { type: Schema.Types.ObjectId, ref: 'Model', required: true },
  fuelTypeID: { type: Schema.Types.ObjectId, ref: 'FuelType', required: true },
  carStatus: { type: String, required: true, enum: ['Rented', 'Available'] },
  status: { type: Boolean, default: true }
});

module.exports = model('Car', CarSchema);

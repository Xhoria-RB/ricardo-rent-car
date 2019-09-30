const { Schema, model } = require('mongoose');

const FuelTypeSchema = new Schema({
  entityName: { type: String, default: 'fuel_type' },
  description: { type: String, required: true, unique: true },
  status: { type: Boolean, default: true }
});

module.exports = model('FuelType', FuelTypeSchema);

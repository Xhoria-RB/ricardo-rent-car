const { Schema, model } = require('mongoose');

const CarTypeSchema = new Schema({
  entityName: { type: String, default: 'car_type' },
  description: { type: String, required: true, unique: true },
  status: { type: Boolean, default: true }
});

module.exports = model('CarType', CarTypeSchema);

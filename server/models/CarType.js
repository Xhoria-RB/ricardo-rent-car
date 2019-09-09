const { Schema, model } = require('mongoose');

const CarTypeSchema = new Schema({
  description: { type: String, required: true, unique: true },
  status: { type: Boolean, default: true }
});

module.exports = model('CarType', CarTypeSchema);

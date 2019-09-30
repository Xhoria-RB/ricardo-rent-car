const { Schema, model } = require('mongoose');

const BrandSchema = new Schema({
  entityName: { type: String, default: 'brand' },
  description: { type: String, required: true },
  status: { type: Boolean, default: true }
});

module.exports = model('Brand', BrandSchema);

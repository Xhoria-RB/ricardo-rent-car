const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
  fullName: { type: String, required: [true, 'fullName is required'] },
  idCard: { type: String, required: [true, 'idCard is required'], unique: true },
  creditCard: { type: String, required: [true, 'idCard is required'], unique: true },
  entity: { type: String, enum: ['F', 'J'], required: true },
  status: { type: Boolean, default: true }
});

module.exports = model('Client', ClientSchema);

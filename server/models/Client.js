const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
  entityName: { type: String, default: 'client' },
  fullName: { type: String, required: [true, 'fullName is required'] },
  idCard: { type: String, required: [true, 'idCard is required'], unique: true },
  creditCard: { type: String, required: [true, 'idCard is required'], unique: true },
  entity: { type: String, enum: ['L', 'N'], required: true },
  status: { type: Boolean, default: true }
});

module.exports = model('Client', ClientSchema);

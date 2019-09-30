const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema({
  entityName: { type: String, default: 'employee' },
  fullName: { type: String, required: [true, 'fullName is required'] },
  idCard: { type: String, required: [true, 'idCard is required'], unique: true },
  email: { type: String, required: [true, 'idCard is required'], unique: true },
  password: { type: String, required: [true, 'idCard is required'] },
  shift: { type: String, enum: ['M', 'V', 'N'], default: 'M' },
  commission: Number,
  startingDate: Date,
  role: { type: String, enum: ['Pending', 'User', 'HR', 'Admin'], default: 'Pending' },
  status: { type: Boolean, default: true }
});

module.exports = model('Employee', EmployeeSchema);

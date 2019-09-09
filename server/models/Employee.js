const { Schema, model } = require('mongoose');

// const {Schema} = mongoose;
const EmployeeSchema = new Schema({
  fullName: { type: String, required: [true, 'fullName is required'] },
  idCard: String,
  email: String,
  password: String,
  shift: String,
  commission: Number,
  startingDate: Date,
  role: String,
  status: Boolean
});

module.exports = model('Employee', EmployeeSchema);

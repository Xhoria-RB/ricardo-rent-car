const { Schema, model } = require('mongoose');

const RentSchema = new Schema({
  entityName: { type: String, default: 'rent' },
  carID: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  clientID: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  employeeID: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  rentDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  pricePerDay: { type: Number, required: true },
  daysQt: { type: Number, required: true },
  comments: String,
  status: { type: Boolean, default: true }
});

module.exports = model('Rent', RentSchema);

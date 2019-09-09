const { Schema, model } = require('mongoose');

const ModelSchema = new Schema({
  brandID: { type: Schema.Types.ObjectId, ref: 'Brand' },
  description: { type: String, required: true },
  status: { type: Boolean, default: true }
});


module.exports = model('Model', ModelSchema);

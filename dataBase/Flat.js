const mongoose = require('mongoose');

const FlatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    roominess: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('flat', FlatSchema);

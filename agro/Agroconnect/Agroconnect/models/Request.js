const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  acreage: {
    type: Number,
    required: true,
  },
  estimatedHarvestTime: {
    type: String,
    required: true,
  },
  soilType: {
    type: String,
    required: true, // Ex: black, red, sandy
  },
  machineType: {
    type: String,
    required: true, // Ex: chain, tyre, 4-wheeler
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  status: {
    type: String,
    default: 'pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);

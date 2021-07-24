const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = Weight = mongoose.model('weight', WeightSchema);

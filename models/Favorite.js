const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model('Favorite', favoriteSchema);

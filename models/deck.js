const mongoose = require('mongoose');

const deckSchema = mongoose.Schema({
  cards: [String],
});

module.exports = mongoose.model('Deck', deckSchema);

const Deck = require('../models/deck');
const { buildDeck } = require('../hooks/customHooks');

async function getDeck(req, res) {
  await Deck.deleteMany();
  const newDeck = new Deck({
    cards: buildDeck(),
  });
  try {
    newDeck.save().then((deck) => {
      return res.json(deck.cards);
    });
  } catch (err) {
    return res.json(err);
  }
}

module.exports = { getDeck };

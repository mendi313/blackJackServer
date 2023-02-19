const Deck = require('../models/deck');

async function getCard(req, res) {
  let deck = await Deck.findOne()
  if (deck){
    let card = deck.cards.pop()
    await deck.save()
    return res.json(card)
  }
}

module.exports = { getCard };

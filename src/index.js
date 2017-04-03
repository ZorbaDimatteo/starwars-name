var starWarsName = require('./starwars-name.json')
var uniqueRandom = require('unique-random-array');

module.exports = {
    all: starWarsName,
    random: uniqueRandom(starWarsName)
};
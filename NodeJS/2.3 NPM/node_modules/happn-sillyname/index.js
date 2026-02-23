var defaultPlayerName = 'Player Name';

var adjectives = require('./lib/adjectives.json');

var nouns = require('./lib/nouns.json');

function randomNoun(generator){
    generator = generator || Math.random;

    return nouns[Math.floor(generator()*nouns.length)];
}

function randomAdjective(generator){
    generator = generator || Math.random;

    return adjectives[Math.floor(generator()*adjectives.length)];
}

function generateStupidName(generator){
    var noun1 = randomNoun(generator);
    var noun2 = randomNoun(generator);
    noun2 = noun2.substr(0, 1).toUpperCase() + noun2.substr(1);
    var adjective = randomAdjective(generator);
    return adjective + noun1 + ' ' + noun2;
}

module.exports = generateStupidName;
module.exports.randomNoun = randomNoun;
module.exports.randomAdjective = randomAdjective;

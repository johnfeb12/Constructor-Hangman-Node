//Random word is selected and exported
var wordsToGuess = ["Charger", "m3", "Corvette", "Colarado", "camaro", "mustang"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;
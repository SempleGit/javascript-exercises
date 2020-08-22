const palindromes = function(inPhrase) {
    let palind = "";
    let phrase = inPhrase.replace(/\W/g, "").toLowerCase();
    for (let i = phrase.length - 1; i >= 0; i--) {
        palind += phrase[i];
    }
    return palind == phrase;

}

module.exports = palindromes

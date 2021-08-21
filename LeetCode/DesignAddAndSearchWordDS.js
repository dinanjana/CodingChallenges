/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.lengthToWord = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.lengthToWord[word.length] ? 
        this.lengthToWord[word.length][word] = true :
        this.lengthToWord[word.length] = { [word]: true };
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const wordAsArray = word.split("");
    if (!this.lengthToWord[wordAsArray.length]) {
        return false;
    }
    const wordContainsWildcard = wordAsArray.find(char => char === '.');
    
    if (!wordContainsWildcard) {
        return !!this.lengthToWord[wordAsArray.length][word];
    }
    
    const wordsWithEligibleLength = Object.keys(
        this.lengthToWord[wordAsArray.length]);
    
    for(const dicitionaryWord of wordsWithEligibleLength) {
        let result = true;
        for (let i = 0; i < wordAsArray.length; i++) {
            if(!(wordAsArray[i] === '.' || wordAsArray[i] === dicitionaryWord.charAt(i))) {
                result = false;
                break;
            }
        }
        if (result) {
            return true;
        }
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
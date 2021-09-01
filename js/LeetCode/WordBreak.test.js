/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    if (!validate(s, wordDict)) {
        return false;
    }
    const dict = wordDict
        .reduce((a, word) => { a[word] = true; return a }, {});

    return findWord(s, 0, dict, '');
};

const validate = (s, wordDict) => {
    const uniqueCharsInS = s.split('')
        .reduce((a, c) => { a[c] = (a[c] || 0) + 1; return a; }, {});
    const uniqueCharsInWordDict = wordDict.reduce((a, word) => {
        word.split('').reduce((a, c) => { a[c] = (a[c] || 0) + 1; return a; }, a);
        return a;
    }, {});

    return Object.keys(uniqueCharsInS).reduce((a, c) => {
        if (uniqueCharsInWordDict[c]) {
            return a && true;
        }
        return false;
    }, true);
}

const findWord = (s, startIdx, dict, currentString) => {
    let currentWord = '';
    
    for(let i = startIdx; i < s.length; i++) {
        currentWord += s.charAt(i);
        if (dict[currentWord]) {
            if (s === currentString + currentWord) {
                return true;
            }
            if (findWord(s, i + 1, dict, currentString + currentWord)) {
                return true;
            }
        }
    }
    return false;
}

// console.log(wordBreak("leetcode", ["leet", "code"]));

describe("wordBreak", () => {
    it('"leetcode", ["leet", "code"]', () => {
        expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
    });
    it('s = "applepenapple", wordDict = ["apple","pen"]', () => {
        expect(wordBreak("applepenapple", ["apple","pen"])).toBe(true);
    });
    it('s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', () => {
        expect(wordBreak("catsandog", ["cats","dog","sand","and","cat"])).toBe(false);
    });
});
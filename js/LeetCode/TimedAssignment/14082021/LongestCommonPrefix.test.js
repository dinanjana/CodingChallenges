const longestCommonPrefix = (strs) => {
    if (strs.length === 1) {
        return strs[0];
    }
    const word = strs[0].split("");
    const rest = strs.slice(1, strs.length);
    let i;
    for(i = 0; i < word.length; i++) {
        if(!isCharIn(word[i], rest, i)) {
            i--;
            break;
        } 
    }
    return word.slice(0, i + 1).join("");
};

const isCharIn = (char, words, idx) => {
    return words.reduce((acc, word) => { 
        if(word.charAt(idx) === char) {
            return acc && true;
        }
        return acc && false;
     }, true);
};

describe("longestCommonPrefix", () => {
    it('strs = ["flower","flow","flight"]', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
    });
    it('strs = ["dog","racecar","car"]', () => {
        expect(longestCommonPrefix( ["dog","racecar","car"])).toBe("");
    })
});
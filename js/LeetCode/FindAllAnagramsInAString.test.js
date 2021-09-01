const findAnagrams = (s, p) => {
    const word = p.split("").reduce((acc, val) => { 
        acc[val] = acc[val] ? ++acc[val] : 1;
        return acc;
    }, {});
    const string = s.split("");
    const result = [];
    for (let i = 0; i < string.length; i++) {
        const occurences = word[string[i]];
        if(occurences) {
            const potentialAnagram = string.slice(i, i + p.length);
            const copyOfWord = { ...word };
            if (isAnagram(potentialAnagram, copyOfWord)) {
                result.push(i);
            }
        }
    }
    return result;
}

const isAnagram = (potentialAnagram, p) => {
    for(let i = 0; i < potentialAnagram.length; i++) {
        let occurences = p[potentialAnagram[i]];
        if (!occurences) {
            return false;
        }
        p[potentialAnagram[i]] = --occurences;
    };
    return Object.keys(p).reduce((acc, key) => acc && p[key] === 0, true);
};

describe("findAnagrams", () => {
    it('s = "cbaebabacd", p = "abc"', () => {
        expect(findAnagrams("cbaebabacd","abc")).toEqual([0, 6]);
    });
    it('s = "abab", p = "ab"', () => {
        expect(findAnagrams("abab","ab")).toEqual([0, 1, 2])
    });
    it('s = abc, p = de', () => {
        expect(findAnagrams("abc", "de")).toEqual([]);
    });
    it('s = abc, p = abcc', () => {
        expect(findAnagrams("abc", "abcc")).toEqual([]);
    });
});
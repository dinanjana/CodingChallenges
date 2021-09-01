const doesTwoSorted = (w1, w2, order) => {
    for(let i = 0; i < w1.length; i++) {
        if (w1.charAt(i) !== w2.charAt(i)) {
            if (order[w1.charAt(i)] < (order[w2.charAt(i)] || -1)) {
                return true;
            } else if (order[w1.charAt(i)] > (order[w2.charAt(i)] || -1)) {
                return false;
            }
        }
    }
    return true;
};

const createOrder = order => order.split("").reduce((acc, char, idx) => { acc[char] = idx; return acc }, {}); 

const isAlienSorted = (words, order) => {
    const processedOrder = createOrder(order);
    for (let i = 0; i < words.length - 1; i++) {
        if (!doesTwoSorted(words[i], words[i + 1], processedOrder)) {
            return false;
        }
    }
    return true
}

describe("isAlienSorted", () => {
    it('["hello","leetcode"]', () => {
        expect(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
    });
    it('["word","world","row"]', () => {
        expect(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")).toBe(false);
    });
    it('["apple","app"]', () => {
        expect(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")).toBe(false);
    })
});
/**
 * Get the minimu before current element and reduce it from current
 * 
*/
const maxProfit = (prices) => {
    let maxProfit = 0;
    let minOpen = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < prices.length; i++) {
        if (minOpen > prices[i]) {
            minOpen = prices[i];
        }
        if (maxProfit < prices[i] - minOpen) {
            maxProfit = prices[i] - minOpen;
        }
    }
    return maxProfit;
};

describe("maxProfit", () => {
    it("[7,1,5,3,6,4]", () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
    });
});
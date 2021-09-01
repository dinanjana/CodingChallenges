const maxProfit = (prices) => {
    const profitsFromBuyingLow = getProfitsFromBuyingLow(prices);
    const profitsFromSellingHigh = getProfitsFromSellingHigh(prices);

    console.log(profitsFromSellingHigh, profitsFromBuyingLow);

    let maximumProfit = 0;
    for (let i = 0; i < profitsFromBuyingLow.length; i++) {
        maximumProfit = Math.max(maximumProfit, profitsFromBuyingLow[i] + profitsFromSellingHigh[i]);
    }
    return maximumProfit;
};

const getProfitsFromBuyingLow = prices => {
    const res = [];
    let profit = 0;
    let buyingPrice = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        buyingPrice = Math.min(buyingPrice, price);
        profit = Math.max(profit, price - buyingPrice);
        res.push(profit);
    } 
    return res;
}

const getProfitsFromSellingHigh = prices => {
    const res = [];
    let profit = 0;
    let sellingPrice = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
        const price = prices[i];
        sellingPrice = Math.max(sellingPrice, price);
        profit = Math.max(profit, sellingPrice - price);
        res.push(profit);
    }
    return res.reverse();
}

describe("Max profit", () => {
    it("[3,3,5,0,0,3,1,4]", () => {
        expect(maxProfit([3,3,5,0,0,3,1,4])).toBe(6);
    });
});
const maxSubArray = array => {
    let currentMax = Number.MIN_SAFE_INTEGER;
    let currentContinousSum = 0;
    for(let i = 0; i < array.length; i++) {
        currentContinousSum += array[i];
        if(array[i] > currentContinousSum) {
            currentContinousSum = array[i];
        }
        if (currentMax < currentContinousSum) {
            currentMax = currentContinousSum;
        }
        
    }
    return currentMax;
};

describe("maxSubArray", () => {
    it("[-2,1,-3,4,-1,2,1,-5,4]", () => {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    });
    it("[5,4,-1,7,8]", () => {
        expect(maxSubArray([5,4,-1,7,8])).toBe(23);
    })
})
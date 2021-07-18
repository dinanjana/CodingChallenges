const maxSubArray = array => {
    let currentMax = null;
    let currentContinousSum = 0;
    for(let i = 0; i < array.length - 1; i++) {
        currentMax = array[i];
        currentContinousSum = array[i];
        for(let j = i + 1 ; i < array.length; j++) {
            currentContinousSum += array[j];
            if (currentContinousSum < currentMax) {
                break;
            } else {
                currentMax = currentContinousSum;
            }
        }
    }
    return currentMax;
};

describe("maxSubArray", () => {
    it("[-2,1,-3,4,-1,2,1,-5,4]", () => {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    });
})
const fourSum = (nums, target) => {
    const twoSumMap = {};
    nums.forEach((num) => {
        for(let j = i; j < nums.length; j++) {
            const twoSum = num + nums[j];
            twoSumMap[twoSum] = twoSumMap[twoSum] ? [...twoSumMap[twoSum], [i, j]] : [[i, j]];
        }
    });
    Object.keys(twoSumMap).reduce((acc, twoSum) => {
        const pair = twoSumMap[target - twoSum];
        if(pair !== undefined) {
            acc.push([]);
        }
    });
};

describe("", () => {
    
});
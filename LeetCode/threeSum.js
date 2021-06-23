const threeSum = (nums) => {
    const res = [];

    const arrayAsMap = nums.reduce((acc, num, i) => { acc[num] = i; return acc }, {});

    nums.forEach((num, i) => {
        for (let j = i + 1; j < nums.length; j++) {
            const twoSum = num + nums[j];
            const probableThirdEntry = arrayAsMap[-1 * twoSum];
            if (probableThirdEntry !== undefined && probableThirdEntry !== i && probableThirdEntry !== j) {
                const probableNextEntry = [num, nums[j], twoSum !== 0 ? -1 * twoSum : 0];
                if (!res.find(entry => arrayEquals(entry, probableNextEntry))) {
                    res.push(probableNextEntry)
                }
            }
        }
    });
    console.log(res)
    return res;
};

const arrayEquals = (arr1, arr2) => {
    if (arr2) {
        arr2.sort();
        return arr1
            .sort()
            .reduce((acc, el, i) => el === arr2[i] && acc, true);
    }
    return false; 
};

module.exports = {
    threeSum,
};

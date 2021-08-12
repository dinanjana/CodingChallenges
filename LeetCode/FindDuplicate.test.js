const findDuplicates = nums => {
    let res = [];
    nums.forEach((num) => {
        let idx = num;
        if (idx < 0) {
            idx *= -1;
        }
        nums[idx - 1] *= -1;
        if (nums[idx - 1] > 0) {
            res.push(idx);
        }
    });
    return res;
};

describe("findDuplicates", () => {
    it("[4,3,2,7,8,2,3,1]", () => {
        expect(findDuplicates([4,3,2,7,8,2,3,1])).toEqual([2, 3])
    })
    it("[1,1,2]", () => {
        expect(findDuplicates([1,1,2])).toEqual([1])
    })
})
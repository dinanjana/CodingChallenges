const removeDuplicates = nums => {
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

describe("removeDuplicates", () => {
    it("[1,1,2]", () => {
        const nums = [1, 1, 2]
        expect(removeDuplicates(nums)).toBe(2);
        expect(nums).toEqual([1, 2]);
    });
})
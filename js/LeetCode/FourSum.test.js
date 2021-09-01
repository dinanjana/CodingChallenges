const fourSum = (nums, target) => {
    const res = [];
    nums.sort((a, b) => a - b);
    nums.forEach((num, i) => {
        if (i > 0 && num === nums[i - 1]) {
            return;
        }
        let j = i + 1;
        let k = j + 1;
        let l = nums.length - 1;
        while(j < nums.length - 2) {
            if (j !== (i + 1) && nums[j -1] === nums[j]) {
                j++;
                k = j + 1;
                continue;
            }
            if (k >= l) {
                j++;
                k = j + 1;
                l = nums.length - 1;
            } else {
                const sum = num + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    const possibleEntry = [num, nums[j], nums[k], nums[l]];
                    if (res.length) {
                        const duplicate = possibleEntry.reduce((acc, num, i) => acc && (num === res[res.length -1][i]), true);
                        if (!duplicate) {
                            res.push(possibleEntry);
                        }
                    } else {
                        res.push(possibleEntry);
                    }
                    k++;
                    l--;
                } else if (sum > target) {
                    l--;
                } else {
                    k++;
                }
            }
        }
    });
    return res;
};

describe("fourSum", () => {
    it("nums = [1,0,-1,0,-2,2], target = 0", () => {
        expect(fourSum([1,0,-1,0,-2,2], 0)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
    });
    it("nums = [2,2,2,2], target = 8", () => {
        expect(fourSum([2,2,2,2,2], 8)).toEqual([[2, 2, 2, 2]]);
    });
    it("[-5,-4,-3,-2,-1,0,0,1,2,3,4,5] 0", () => {
        const expected = [[-5,-4,4,5],[-5,-3,3,5],[-5,-2,2,5],[-5,-2,3,4],[-5,-1,1,5],[-5,-1,2,4],[-5,0,0,5],[-5,0,1,4],[-5,0,2,3],[-4,-3,2,5],[-4,-3,3,4],[-4,-2,1,5],[-4,-2,2,4],[-4,-1,0,5],[-4,-1,1,4],[-4,-1,2,3],[-4,0,0,4],[-4,0,1,3],[-3,-2,0,5],[-3,-2,1,4],[-3,-2,2,3],[-3,-1,0,4],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]];
        const actual = fourSum([-5,-4,-3,-2,-1,0,0,1,2,3,4,5], 0);
        expect(actual).toEqual(expected);  
    });
});
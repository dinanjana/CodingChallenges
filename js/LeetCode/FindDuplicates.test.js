const findDuplicates = nums => {
    const allNumbers = new Array(nums.length);
    nums.forEach(num => {
        if (allNumbers[num - 1]) {
            allNumbers[num - 1] = ++allNumbers[num - 1];
        } else {
            allNumbers[num - 1] = 1;
        }
    });
    return allNumbers.reduce((acc, occurrences, idx) => {
        if (occurrences > 1) {
            acc.push(idx + 1);
        }
        return acc;
    }, []);
};

var findDuplicates = function(nums) {
    let checker = []; //either be 0 (for numbers that appear once) or 1(for number that appear multiple times)
    let retArr = [];
    for(let i=0; i<nums.length; i++){
        if(checker[nums[i]] > 0) //since 1 <= nums[i] <= n, we can directly store 0/1 against each value of the array (nums[i])
            retArr.push(nums[i]);
        else
            checker[nums[i]] = 1;
    }
    return retArr;
};

const findDuplicatesII = nums => {
    const ret = [];
    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1;
        if(nums[idx] < 0) {
            ret.push(idx + 1);
        } else {
            nums[idx] *= -1; 
        }
    }
    return ret;
}

describe("findDuplicates", () => {
    it("[4,3,2,7,8,2,3,1]", () => {
        expect(findDuplicates([4,3,2,7,8,2,3,1])).toEqual([2, 3]);
    });
    it("[1,1,2]", () => {
        expect(findDuplicates([1,1,2])).toEqual([1]);
    });
    it("[1,2]", () => {
        expect(findDuplicates([1 ,2])).toEqual([]);
    });
    it("[]", () => {
        expect(findDuplicates([])).toEqual([]);
    });

    it("[4,3,2,7,8,2,3,1]", () => {
        expect(findDuplicatesII([4,3,2,7,8,2,3,1])).toEqual([2, 3]);
    });
    it("[1,1,2]", () => {
        expect(findDuplicatesII([1,1,2])).toEqual([1]);
    });
    it("[1,2]", () => {
        expect(findDuplicatesII([1 ,2])).toEqual([]);
    });
    it("[]", () => {
        expect(findDuplicatesII([])).toEqual([]);
    });
})
/**
 * [2,3,1,1,4] => 0->1->4 true, 0->2->3->4 true
 * [3,2,1,0,4] -> 0->3 false, 0->2->3 false, 0->1->3
 * [1, 2, 2, 1, 1, 0, 1]
 * i = 0 => 1 => 3 => 4 => 3 => 1 => 2 => 4 => 3
 * distances = [1] => [1, 2, 1, 1] => [1, 2, 1] => [1, 2] => [1, 1, 2] => [1, 1, 2, 1] => [1, 1, 1]
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
    let maxReach = 0;
    let i = 0;
    while(i < nums.length && maxReach >= i) {
        maxReach = Math.max(maxReach, i + nums[i]);
        i++;
        if(maxReach >= nums.length - 1) {
            return true;
        }
    }
    return false;
}

//canJump([3,2,1,0,4])

describe("canJump", () => {
    it("[2,3,1,1,4]", () => {
        expect(canJump([2,3,1,1,4])).toBe(true);
    });
    it("[3,2,1,0,4]", () => {
        expect(canJump([3,2,1,0,4])).toBe(false);
    })
    it("[1]", () => {
        expect(canJump([1])).toBe(true);
    })
    it("[0,1]", () => {
        expect(canJump([0,1])).toBe(false);
    })
});
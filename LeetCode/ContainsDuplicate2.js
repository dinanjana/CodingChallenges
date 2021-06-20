const containsNearbyDuplicate = (nums, k) => {
    const map = {};
    let res = false;
    nums.forEach((num, i) => {
        if (map[num] !== undefined) {
            const diff = i - map[num];
            if (diff <= k) {
                res = true;
            } else {
                map[num] = i;
            }
        } else {
            map[num] = i;
        }
    });
    return res;
};

const containsNearbyDuplicateEfficient = (nums, k) => {
    const map = {};
    for(let i = 0; i < nums.length ; i++) {
        if (map[nums[i]] !== undefined) {
            const diff = i - map[nums[i]];
            if (diff <= k) {
                return true;
            } else {
                map[nums[i]] = i;
            }
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
};

module.exports = {
    containsNearbyDuplicate,
    containsNearbyDuplicateEfficient
};
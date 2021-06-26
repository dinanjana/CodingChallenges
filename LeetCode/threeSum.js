const threeSum = (nums) => {
    const res = [];
    nums.sort((a,b) => a - b);
    nums.forEach((num, i) => {
        if(i > 0 && (num === nums[i -1])) {
            return;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k) {
            if (num + nums[j] + nums[k] === 0) {
                if (res.length > 0) {
                    const [ v1, v2, v3 ] = res[res.length -1];
                    if (v1 !== num || v2 !== nums[j] || v3 !== nums[k]) {
                        res.push([num, nums[j], nums[k]]);
                    }
                } else {
                    res.push([num, nums[j], nums[k]]);
                }
                j++;
                k--;
            } else if ((num + nums[j] + nums[k]) > 0) {
                k--;
            } else {
                j++;
            }
        }
    });
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

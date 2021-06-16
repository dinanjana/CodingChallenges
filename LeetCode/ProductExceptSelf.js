const productExceptSelf = nums => {
    let firstZero = null;
    const product = nums.reduce((acc, val, i) => {
        if (val === 0 && firstZero === null) {
            firstZero = i;
            return acc;
        }
        return val * acc;
    }, 1);
    if (product === 0) {
        return new Array(nums.length).fill(0);
    }
    if (firstZero !== null) {
        const res = new Array(nums.length).fill(0);
        res[firstZero] = product;
        return res;
    }
    return nums.map(num => product/num);
};

module.exports = { productExceptSelf };
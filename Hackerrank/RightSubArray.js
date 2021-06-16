const max = arr => 
    arr.reduce((acc, val) => val > acc ? val : acc, Number.MIN_SAFE_INTEGER);

const maxRightSubArray = input => input
    .reduce((acc, val, idx) => val > max(input.slice(idx + 1)) ? [...acc, val] : acc, []);    

let res = maxRightSubArray([2, -1, 50, 12 ,1]);
console.log(res);
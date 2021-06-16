const threeSum = (nums) => {
    const res = [];

    nums.forEach((num, i, arr) => {
        nums.forEach((secondNum, j) => {
            if(i <= j) {
                return;
            }
            const twoSum = num + secondNum;
            const thirdNum = arr.find((num, k) => k !== i && k!==j && (num + twoSum === 0));
            
            if (thirdNum !== undefined) { 
                const potentialEntry = [num, secondNum, thirdNum];
                const duplicate = res.find(res => arrayEquals(res, potentialEntry));
                if (!duplicate) {
                    res.push(potentialEntry);
                }
            } 
        })
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

let res = threeSum([-1,0,1,2,-1,-4]);
console.log(JSON.stringify(res));

res = threeSum([1,2,-2,-1]);
console.log(JSON.stringify(res));

res = threeSum([0, 0, 0]);
console.log(JSON.stringify(res))

res = threeSum([0,3,0,1,1,-1,-5,-5,3,-3,-3,0]);
console.log(JSON.stringify(res))
const threeSum = (nums) => {
    const res = [];
    nums
        .sort((a, b) => a - b)
        .forEach((firstNum, i) => {
            nums.forEach((thirdNum, j, arr) => {
                //console.log(arr)
                if(j > i + 1) {
                    const total = firstNum + arr[i + 1] + thirdNum;
                    if (total === 0) {
                        let duplicate = false;
                        const possibleSolution = [firstNum, arr[i + 1], thirdNum]
                        res.forEach(arr1 => {
                            if (arrayEquals(arr1, possibleSolution)) {
                                duplicate = true;
                            }
                        });
                        if(!duplicate) {
                            res.push(possibleSolution);
                        }
                    }
                }
            });
        }); 
    console.log(res)     
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

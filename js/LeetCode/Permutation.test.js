const permute = array =>{
    let result = [];
    getPermutations(array, 0, array.length - 1, result);
    return result;
} 

const getPermutations = (array, startIdx, endIdx, result) => {
    let permutation = [...array];
    if (endIdx === startIdx) {
        result.push(permutation);
    } else {
        for (let i = startIdx; i <= endIdx; i++) {
            swap(permutation, startIdx, i);
            getPermutations(permutation, startIdx + 1, endIdx, result);
            swap(permutation, startIdx, i);
        }
    }
};

const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(permute([1, 2, 3]));

describe("Permutations", () => {
    it("[1,2,3]", () => {
        expect(permute([1,2,3])).toEqual([
            [ 1, 2, 3 ],
            [ 1, 3, 2 ],
            [ 2, 1, 3 ],
            [ 2, 3, 1 ],
            [ 3, 2, 1 ],
            [ 3, 1, 2 ]
          ]);
    })
});
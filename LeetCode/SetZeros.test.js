// O(mn)
const setZeroes = (matrix) => {
    const zeroColumns = {};
    let hasZerosFound = false;
    matrix.forEach((row, rowId) => {
        row.forEach((ele, idx) => {
            if(ele === 0) {
                if (!hasZerosFound) {
                    hasZerosFound = true;
                }
                zeroColumns[idx] = true;
                if(rowId > 0) {
                    for(let i = rowId - 1; i >= 0; i--) {
                        matrix[i][idx] = 0;
                    }
                }
            }
            if(zeroColumns[idx]) {
                row[idx] = 0;
            }
        });
        if(hasZerosFound) {
            row.forEach((el, idx) => {
                row[idx] = 0;
            });
            hasZerosFound = false;
        }
    });
};

describe("setZeroes", () => {
    it("[[1,1,1],[1,0,1],[1,1,1]]", () => {
        const matrix = [[1,1,1],[1,0,1],[1,1,1]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
    })
    it("[[1],[3],[0]]", () => {
        const matrix = [[1],[3],[0]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0],[0],[0]]);
    })
});
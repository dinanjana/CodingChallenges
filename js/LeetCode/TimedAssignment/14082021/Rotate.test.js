const rotate = matrix => {
    let length = matrix.length - 1;
    let initialRow = 0;
    let initialCol = 0;
    let currentRow = 0;
    let currentCol = 0
    while (length >= 1) {
        swap(initialRow, initialCol, currentRow, currentCol, matrix, length);
        currentCol++
        if (initialCol + length === currentCol) {
            initialRow++;
            initialCol++;
            currentRow = initialRow;
            currentCol = initialCol;
            length -= 2;
        }
    }
    console.log(matrix)
};

const swap = (initialRow, initialCol, currentRow, currentCol, matrix, length) => {
    let nextRow = currentRow;
    let nextCol = currentCol;
    
    //down
    let temp = matrix[nextCol][initialCol + length];
    matrix[nextCol][initialCol + length] = matrix[nextRow][nextCol];
    nextRow = nextCol;
    nextCol = initialCol + length;

    //left
    let temp2 = matrix[initialRow + length][initialRow + length - (nextRow - initialRow)];
    matrix[initialRow + length][initialRow + length - (nextRow - initialRow)] = temp;
    nextRow = initialRow + length;
    nextCol = initialRow + length - (nextRow - initialRow);

    //up
    temp = matrix[nextCol][initialRow]; 
    matrix[nextCol][initialRow] = temp2;

    //left
    matrix[currentRow][currentCol] = temp;
};

describe("Rotate matrix", () => {
    it("[[1,2,3],[4,5,6],[7,8,9]]", () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]];
        rotate(matrix);
        expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
    });
    // it("[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", () => {
    //     const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
    //     rotate(matrix);
    //     expect(matrix).toEqual( [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
    // });
    // it("[[1,2][3,4]]", () => {
    //     const matrix = [[1, 2], [3, 4]];
    //     rotate(matrix);
    //     expect(matrix).toEqual([[3, 1], [4, 2]])
    // });
    // it("[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]", () => {
    //     const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
    //     rotate(matrix);
    //     expect(matrix).toEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]])
    // })
});
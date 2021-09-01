/**
 * 
 * [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ]
 * 
 * [
 * [7,4,1],
 * [8,5,2],
 * [9,6,3]
 * ]
 * 
*/

const rotate = matrix => {
    //Keep track of bound of square
    let rowLength = matrix.length;

    //Initial location
    let initialRow = 0;
    let initialCol = 0

    //Curren location
    let currentCol = 0;
    let currentRow = 0;

    while(rowLength >= 2) {
        swap(initialRow, initialCol, currentRow, currentCol, rowLength, matrix);
        if(currentCol === currentRow + rowLength - 2) {
            currentRow++;
            currentCol = currentRow;
            rowLength -=2;
            initialCol++;
            initialRow++;
            continue;
        }
        currentCol++;
    }
};

const swap = (initialRow, initialCol, currentRow, currentCol, rowLength, matrix) => {

    // Down
    let nextCol = initialCol + rowLength - 1;
    let nextRow = currentCol;

    let temp = matrix[nextRow][nextCol];
    matrix[nextRow][nextCol] = matrix[currentRow][currentCol];

    // Left
    nextRow = initialRow + rowLength -1;
    nextCol = initialCol + rowLength - 1 - (currentCol - initialCol);

    let temp2 = matrix[nextRow][nextCol];
    matrix[nextRow][nextCol] = temp;

    //Up
    nextCol = initialCol;
    nextRow = initialCol + rowLength - 1 - (currentCol - initialCol);

    matrix[currentRow][currentCol] = matrix[nextRow][nextCol];
    matrix[nextRow][nextCol] = temp2;
};

//rotate([[1,2,3],[4,5,6],[7,8,9]]);
describe("Rotate matrix", () => {
    it("[[1,2,3],[4,5,6],[7,8,9]]", () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]];
        rotate(matrix);
        expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
    });
    it("[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", () => {
        const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
        rotate(matrix);
        expect(matrix).toEqual( [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
    });
    it("[[1,2][3,4]]", () => {
        const matrix = [[1, 2], [3, 4]];
        rotate(matrix);
        expect(matrix).toEqual([[3, 1], [4, 2]])
    });
    it("[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]", () => {
        const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
        rotate(matrix);
        expect(matrix).toEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]])
    })
});
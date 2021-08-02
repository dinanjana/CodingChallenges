
const directions = {
    left: 'left',
    right: 'right',
    up: 'up',
    down: 'down'
};

const spiralOrder = matrix => {
    let visited = 0;
    let yStart = -1; // 0
    let yEnd = matrix.length;
    let xStart = -1;
    let xEnd = matrix[0].length;
    const result = [];

    let direction = getNextDirection();

    while (visited < matrix.length * matrix[0].length) {
        switch(direction) {
            case directions.right: {
                visited = goRight(result, visited, matrix, yStart, xStart, xEnd);
                yStart++;
                break;
               
            }
            case directions.down: {
                visited = goDown(result, visited, matrix, xEnd, yStart, yEnd);
                xEnd--;
                break;
            }
            case directions.left: {
                visited = goLeft(result, visited, matrix, yEnd, xEnd, xStart);
                yEnd--;
                break;
            }
            case directions.up: {
                visited = goUp(result, visited, matrix, xStart, yEnd, yStart);
                xStart++;
                break;
            }
        }
        direction = getNextDirection(direction);
    }

    return result;
    
};

const getNextDirection = direction => {
    switch(direction) {
        case directions.right: {
            return directions.down;
        }
        case directions.down: {
            return directions.left;
        }
        case directions.left: {
            return directions.up;
        }
        case directions.up: {
            return directions.right;
        }
        default: {
            return directions.right;
        }
    }
}

const goRight = (result, visited, matrix, yStart, xStart, xEnd) => {
    for (let col = xStart + 1; col < xEnd; col++) {
        result.push(matrix[yStart + 1][col]);
        visited++
    }
    return visited;
};

const goLeft = (result, visited, matrix, yStart, xStart, xEnd) => {
    for (let col = xStart - 1; col > xEnd; col--) {
        result.push(matrix[yStart - 1][col]);
        visited++
    }
    return visited;
};

const goDown = (result, visited, matrix, xStart, yStart, yEnd) => {
    for (let row = yStart + 1; row < yEnd; row++) {
        result.push(matrix[row][xStart - 1]);
        visited++;
    }
    return visited;
};

const goUp = (result, visited, matrix, xStart, yStart, yEnd) => {
    for (let row = yStart - 1; row > yEnd; row--) {
        result.push(matrix[row][xStart + 1]);
        visited++;
    }
    return visited;
}

//spiralOrder([[1,2,3],[4,5,6],[7,8,9]])

describe("spiralOrder", () => {
    it("[[1,2,3],[4,5,6],[7,8,9]]", () => {
        expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
    });
    it("[[1,2,3,4],[5,6,7,8],[9,10,11,12]]", () => {
        expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
    });
    it("[[1]]", () => {
        expect(spiralOrder([[1]])).toEqual([1]);
    });
    it("[[1],[2],[3]]", () => {
        expect(spiralOrder([[1],[2],[3]])).toEqual([1,2,3]);
    });
    it("[[1,2,3]]", () => {
        expect(spiralOrder([[1,2,3]])).toEqual([1,2,3]);
    })
});
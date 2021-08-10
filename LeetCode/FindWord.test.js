

const exist = (board, word) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (search(row, col, word, board)) {
                return true;
            }
        }
    }
    return false;
}

// DFS for a given node
const search = (row, col, word, board, count = 0) => {
    if (count === word.length) {
        return true;
    }
    if (row < 0 || row >= board.length 
        || col < 0 || col >= board[0].length
        || board[row][col] !== word.charAt(count)) {
        return false;
    }

    const temp = board[row][col];
    board[row][col] = '';
    const nextCount = count + 1;
    const found = search(row, col + 1, word, board, nextCount) 
        || search(row + 1, col, word, board, nextCount) 
        || search(row, col - 1, word, board, nextCount)
        || search(row -1, col, word, board, nextCount);
    
    board[row][col] = temp;
    return found;    
};



describe("exist", () => {
    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', () => {
        expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true);
    });
    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', () => {
        expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE")).toBe(true);
    });
    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', () => {
        expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")).toBe(false);
    });
    it('[["C","A","A"], "AAC"', () => {
        expect(exist([["C","A","A"]], "AAC")).toBe(true);
    });
    it('[["C","A","A"], "AAC"', () => {
        expect(exist([["C","A","A"]], "AAA")).toBe(false);
    });
    it('[["C","A","A"],["A","A","A"],["B","C","D"]], "AAB"', () => {
        expect(exist([["C","A","A"],["A","A","A"],["B","C","D"]], "AAB")).toBe(true);
    });
    it('[["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCEFSADEESE"', () => {
        expect(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCEFSADEESE")).toBe(true);
    });
});        
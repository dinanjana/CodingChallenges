const insert = (intervals, newInterval) => {
    const [ start, end ] = newInterval;
    // Get overlapping
    const startIdx = intervals.findIndex(interval => start >= interval[0] && start <= interval[1]);
    const endIdx = intervals.findIndex(interval => end >= interval[0] && end <= interval[1]);
    insertInterval(startIdx, endIdx, newInterval, intervals);
    return intervals;
};

const insertInterval = (startIdx, endIdx, newInterval, intervals) => {
    const [start, end] = newInterval;
    if (!intervals.length) {
        intervals.push(newInterval);
    } else if (startIdx === -1 && endIdx === -1) {
       // Both start and end not overlapping
        startIdx = intervals.findIndex(interval => start <= interval[0]);
        endIdx = intervals.findIndex(interval => end <= interval[1]);
        if (startIdx === -1) {
            startIdx = intervals.length;
            endIdx = startIdx;
        } else if (endIdx === -1){
            endIdx = intervals.length;
        }
        intervals.splice(startIdx, endIdx - startIdx, newInterval);
    } else if (startIdx === -1) {
        // Only start not overlapping
        startIdx = intervals.findIndex(interval => start <= interval[0]);
        newInterval = [newInterval[0], intervals[endIdx][1]];
        intervals.splice(startIdx, endIdx - startIdx + 1, newInterval);
    } else if (endIdx === -1) {
        // Only end not overlapping
        endIdx = intervals.findIndex(interval => end <= interval[1]);
        newInterval = [intervals[startIdx][0], newInterval[1]];
        if (endIdx === -1) {
            endIdx = intervals.length;
        }
        let deleteCount = endIdx - startIdx;
        deleteCount = deleteCount > 0 ? deleteCount : 1
        intervals.splice(startIdx, deleteCount, newInterval);
    } else {
        // Both start and end overlapping
        newInterval = [intervals[startIdx][0], intervals[endIdx][1]];
        intervals.splice(startIdx, endIdx - startIdx + 1, newInterval);
    }
};

describe("insertInterval", () => {
    it("[[1, 2],[5, 6],[7, 8],[11, 12]] [3, 10]", () => {
        expect(insert([[1, 2],[5, 6],[7, 8],[11, 12]],[3, 10])).toEqual([ [ 1, 2 ], [ 3, 10 ], [ 11, 12 ] ]);
    });
    it("[] [3, 10]", () => {
        expect(insert([],[3, 10])).toEqual([[3,10]]);
    });
    it("[[1, 2],[5, 6],[7, 8],[11, 12]], [3, 11]", () => {
        expect(insert([[1, 2],[5, 6],[7, 8],[11, 12]], [3, 11])).toEqual([[1, 2],  [3, 12]])
    });
    it("[[1, 2],[3, 5],[7, 8],[11, 12]], [4, 10]", () => {
        expect(insert([[1, 2],[3, 5],[7, 8],[11, 12]], [4, 10])).toEqual([[1, 2],[3, 10],[11,12]]);
    });
    it("[[1, 2],[3, 5],[7, 8],[11, 12]],[4, 11]", () => {
        expect(insert([[1, 2],[3, 5],[7, 8],[11, 12]],[4, 11])).toEqual([[1, 2], [3, 12]]);
    });
    it("[[1,5]],[2,7]", () => {
        expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]])
    });
    it("[[2,5]],[1,7]", () => {
        expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]])
    });
    it("[[1,5]],[6,8]", () => {
        expect(insert([[1,5]], [6,8])).toEqual([[1 ,5], [6, 8]]);
    });
    it("[[3, 4],[5, 6],[7, 8],[11, 12]],[2, 11]", () => {
        expect(insert([[3, 4],[5, 6],[7, 8],[11, 12]],[2, 11])).toEqual([[2, 12]]);
    });
    it("[[3, 4],[5, 6],[7, 8],[11, 12]],[2, 14]", () => {
        expect(insert([[3, 4],[5, 6],[7, 8],[11, 12]],[2, 14])).toEqual([[2, 14]]);
    });
    it("[[0,7],[8,8],[9,11]], [4, 13]", () => {
        expect(insert([[0,7],[8,8],[9,11]], [4,13])).toEqual([[0 ,13]]);
    });
});

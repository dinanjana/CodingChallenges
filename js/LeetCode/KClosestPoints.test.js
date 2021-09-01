const kClosest = (points, k) => {
    const result = [];
    points.forEach(([x ,y]) => {
        const entry = { length: x ** 2 + y ** 2, coord: [x, y] };
        insertInAscendingOrder(entry, result);
    });
    return result.slice(0, k).map(({ coord }) => { return coord; });
};

const insertInAscendingOrder = (entry, arr) => {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > entry.length) {
            break;
        }
    }
    arr.splice(i, 0, entry);
};

describe("kClosest", () => {
    it("[[3,3],[5,-1],[-2,4]]", () => {
        expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]]);
    });
    it("points = [[1,3],[-2,2]], k = 1", () => {
        expect(kClosest([[1,3],[-2,2]],1)).toEqual([[-2, 2]]);
    })
});
const { threeSum } = require('./threeSum');

describe('threeSum', () => {
    it('[0, 0, 0]', () => {
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
    it('[-1,0,1,2,-1,-4]', () => {
        expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[ -1, 0, 1 ], [ -1, -1, 2 ]]);
    });
    it('[1,2,-2,-1]', () => {
        expect(threeSum([1,2,-2,-1])).toEqual([]);
    });
    it('[0,3,0,1,1,-1,-5,-5,3,-3,-3,0]', () => {
        expect(threeSum([0,3,0,1,1,-1,-5,-5,3,-3,-3,0])).toEqual([[ -3, 0, 3 ], [ 0, 0, 0 ], [ -1, 0, 1 ]]);
    });
});

// [-2 , 1 , 1, 2]
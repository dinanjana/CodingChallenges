const { maxRightSubArray } = require('./RightSubArray');

describe('maxRightSubArray', () => {
    it('[2, -1, 50, 12 ,1]', () => {
        expect(maxRightSubArray([2, -1, 50, 12 ,1])).toEqual([ 50, 12, 1 ]);
    });
});
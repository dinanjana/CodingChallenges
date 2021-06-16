const { productExceptSelf } = require('./ProductExceptSelf');

describe('productExceptSelf', () => {
    it('[1,2,3,4]', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });
    it('[-1,1,0,-3,3]', () => {
        expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    });
    it('[-1,1,0,-3,0]', () => {
        expect(productExceptSelf([-1,1,0,-3,0])).toEqual([0,0,0,0,0]);
    });
});
const { containsNearbyDuplicate, containsNearbyDuplicateEfficient }  = require('./ContainsDuplicate2');

describe('containsNearbyDuplicate', () => {
    it('[1,2,3,1], k = 3', () => {
        expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true);
    });
    it('[1,0,1,1], k = 1', () => {
        expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true);
    });
    it('[1,2,3,1,2,3], k = 2', () => {
        expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false);
    });
});

describe('containsNearbyDuplicateEfficient', () => {
    it('[1,2,3,1], k = 3', () => {
        expect(containsNearbyDuplicateEfficient([1,2,3,1], 3)).toBe(true);
    });
    it('[1,0,1,1], k = 1', () => {
        expect(containsNearbyDuplicateEfficient([1,0,1,1], 1)).toBe(true);
    });
    it('[1,2,3,1,2,3], k = 2', () => {
        expect(containsNearbyDuplicateEfficient([1,2,3,1,2,3], 2)).toBe(false);
    });
});
const maxArea = height => {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const currentArea = (j - i) *(height[i] > height[j] ? height[j] : height[i])
            if (currentArea > max) {
                max = currentArea;
            }
        }
    }
    return max;
};

const optimizedMaxArea = height => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let currentArea; 
        if (height[left] > height[right]) {
            currentArea = (right - left) * height[right];
            --right;
        } else {
            currentArea = (right - left) * height[left];
            ++left;
        }
        if (currentArea > max) {
            max = currentArea;
        }
    }
    return max;
};

describe("maxArea", () => {
    it("[1,8,6,2,5,4,8,3,7]", () => {
        expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
    });

    it("[1,8,6,2,5,4,8,3,7]", () => {
        expect(optimizedMaxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
    })
});
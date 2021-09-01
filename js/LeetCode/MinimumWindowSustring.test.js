const minWindow = (s, t) => {
    if (t.length > s.length) {
        return "";
    }
    if (t === s) {
        return t;
    }
    let currentMinimumWindow = [];
    const requiredChars = t.split("").reduce(
        (a, char) => { a[char] = a[char] ? ++a[char] : 1; return a; }, {});   

    for (let i = 0; i <= s.length - t.length; i++) {
        if (requiredChars[s.charAt(i)]) {
            currentMinimumWindow = 
                getWindow(i, currentMinimumWindow, s, requiredChars);
        }
    }
    return currentMinimumWindow.join("");    
};

const getWindow = (idx, currentMinimumWindow, s, t) => {
    const maxLength = idx + currentMinimumWindow.length;
    const maxIdx = currentMinimumWindow.length ? maxLength > s.length ? s.length : maxLength : s.length;
    const requiredChars = { ...t };
    const currentMinString = [];
    let requiredCharsLeft = Object.keys(requiredChars)
        .reduce((a, key) => { a += requiredChars[key]; return a }, 0);
    for (let i = idx; i < maxIdx; i++ ) {
        currentMinString.push(s.charAt(i));
        if (requiredChars[s.charAt(i)]) {
            --requiredChars[s.charAt(i)];
            if (requiredChars[s.charAt(i)] >= 0) {
                --requiredCharsLeft;
            }
        }
        if (!requiredCharsLeft) {
            return currentMinString;
        }
    }
    return currentMinimumWindow;
};

const minWindowOptimized = (s, t) => {
    if (t.length > s.length) {
        return "";
    }
    if (t === s) {
        return t;
    }
    const requiredChars = t.split("").reduce(
        (a, char) => { a[char] = a[char] ? ++a[char] : 1; return a; }, {});
    
    let left = 0;
    let right = 0;
    let minString = [];
    let temp = [];
    let currentMinStringMap = { ...requiredChars };
    let processing = false;

    const isAllRequiredCharsUsed = () => {
        for(const key in currentMinStringMap) {
            if (currentMinStringMap[key] > 0) {
                return false;
            }
        }
        return true;
    }; 

    while(left < s.length) {
        // Initialising search
        if (!processing) {
            if (currentMinStringMap[s.charAt(left)]) {
                processing = true;
                --currentMinStringMap[s.charAt(left)];
                temp.push(s.charAt(left));
                if (isAllRequiredCharsUsed()) {
                    minString = temp;
                    temp = [];
                    ++left;
                    right = left;
                    currentMinStringMap = { ...requiredChars };
                    processing = false;
                } else {
                    ++right;
                }
            } else {
                ++left;
                right = left;
            }

        } else {
            if (right > s.length) {
                ++left;
                right = left;
                currentMinStringMap = { ...requiredChars };
                processing = false;
            } else {
                if (currentMinStringMap[s.charAt(right)]) {
                    --currentMinStringMap[s.charAt(right)];
                    temp.push(s.charAt(right));
                    if (isAllRequiredCharsUsed()) {
                        minString = temp;
                        temp = [];
                        ++left;
                        right = left;
                        currentMinStringMap = { ...requiredChars };
                        processing = false;
                    } else {
                        ++right;
                    }
                } else {
                    temp.push(s.charAt(right));
                    ++right;
                }
                // If initial substr is found and current min string length exceeds previous
                if (minString.length && minString.length <= temp.length) {
                    temp = [];
                    ++left;
                    right = left;
                    currentMinStringMap = { ...requiredChars };
                    processing = false;
                }
            }
        }
    }
    return minString.join("");
}

describe("minWindow", () => {
    it('s = "ADOBECODEBANC", t = "ABC"', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    it('s = "ADOBECODEBANAC", t = "ABC"', () => {
        expect(minWindow("ADOBECODEBANAC", "ABC")).toBe("BANAC");
    });

    it('s = "ab", t = "b"', () => {
        expect(minWindow("ab", "b")).toBe("b");
    });

    it('s = "ADOBECODEBANC", t = "ABC"', () => {
        expect(minWindowOptimized("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    it('s = "ADOBECODEBANAC", t = "ABC"', () => {
        expect(minWindowOptimized("ADOBECODEBANAC", "ABC")).toBe("BANAC");
    });

    it('s = "b", t = "b"', () => {
        expect(minWindowOptimized("ba", "b")).toBe("b");
    });
});
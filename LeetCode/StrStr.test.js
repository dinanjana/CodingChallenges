const strStr = (haystack, needle) => {
    if (needle === '') {
        return 0;
    }
    let position = -1;
    if (needle.length > haystack.length) {
        return position;
    }
    let currentPositionInNeedle = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (needle.charAt(currentPositionInNeedle) === haystack.charAt(i)) {
            if (currentPositionInNeedle === 0) {
                position = i;
            }
            if(currentPositionInNeedle === needle.length - 1) {
                return position;
            }
            currentPositionInNeedle++;
        } else if (currentPositionInNeedle > 0) {
            i = i - currentPositionInNeedle;
            currentPositionInNeedle = 0;
            position = -1;
        }
    }
    return currentPositionInNeedle === needle.length ? position : -1;
};

describe("strStr", () => {
    it("'hello', 'll'", () => {
        expect(strStr("hello", "ll")).toBe(2);
    });
    it("'aaa', 'aaaa", () => {
        expect(strStr("aaa", "aaaa")).toBe(-1);
    })
    it('"mississippi", "issip"', () => {
        expect(strStr("mississippi", "issip")).toBe(4);
    });
    it('"mississippi", "issipi"', () => {
        expect(strStr("mississippi", "issipi")).toBe(-1);
    });
    it('"mississippi", "i"', () => {
        expect(strStr("mississippi", "i")).toBe(1);
    });
    it('"mississippi", "pi"', () => {
        expect(strStr("mississippi", "pi")).toBe(9);
    });
    it('"abcd", "d"', () => {
        expect(strStr("abcd", "d")).toBe(3);
    });
    it('"aacd", "a"', () => {
        expect(strStr("aacd", "a")).toBe(0);
    });
    it('"mississippi","sippia"', () => {
        expect(strStr("mississippi", "sippia")).toBe(-1);
    })
});
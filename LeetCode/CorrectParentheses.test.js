const BRACKETS = {
    ')': '(',
    '}': '{',
    ']': '['
};

const isValid = (s, openBrackets = []) => {
    if (!s.length) {
        if (!openBrackets.length) {
            return true;
        }
        return false;
    }
    const top = s.charAt(0);
    const openingBrackets = Object.values(BRACKETS);
    
    if (BRACKETS[top]) {
        if (openBrackets[openBrackets.length-1] !== BRACKETS[top]) {
            return false;
        }
        openBrackets.pop();
    }
    if (openingBrackets.find(s => s === top)) {
        openBrackets.push(top);
    }
    return isValid(s.slice(1), openBrackets);
};

describe("isValid", () => {
    it("s = ()", () => {
        expect(isValid("()")).toBe(true);
    });
    it("s = ([)", () => {
        expect(isValid("([)")).toBe(false);
    });
    it("s = (])", () => {
        expect(isValid("(])")).toBe(false);
    });
    it("s = (", () => {
        expect(isValid("(")).toBe(false);
    });
    it("s = )", () => {
        expect(isValid(")")).toBe(false);
    });
    it("s = ()()", () => {
        expect(isValid("()()")).toBe(true);
    });
});
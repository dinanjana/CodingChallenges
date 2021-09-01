const validPalindrome = s => {
    const input = s.split("");
    let i = 0, j = input.length - 1;

    while(i < j) {
        if (input[i] !== input[j]) {
            return isPalindrome(input, i, j - 1) || isPalindrome(input, i + 1, j)
        }
        i++;
        j--;
    }
    return true;
};

const isPalindrome = (s, i, j) => {
    while(i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

describe("validPalindrome", () => {
    it("abc", () => {
        expect(validPalindrome("abc")).toBe(false);
    });
    it("abca", () => {
        expect(validPalindrome("abca")).toBe(true);
    });
    it("a", () => {
        expect(validPalindrome("a")).toBe(true);
    });
});
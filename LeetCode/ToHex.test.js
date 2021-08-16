const toHex = num => {
    if (num === 0) {
        return '0';
    }
    if (num < 0) {
        num += (2 ** 32);
    }
    let result = [];
    while (num > 0) {
        let remainder = num % 16;
        num -= remainder;
        if (remainder > 9) {
            remainder = String.fromCharCode(97 + remainder - 10);
        }
        result.push(remainder);
        num /= 16;
    }
    return result.reverse().join("");
};

describe("toHex", () => {
    it("26", () => {
        expect(toHex(26)).toBe("1a")
    });
    it("-1", () => {
        expect(toHex(-1)).toBe("ffffffff")
    });
});
const { letterCombinations } = require("./LetterCombination");

describe("letterCombinations", () => {
    it("23", () => {
        expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
    });
    it("2", () => {
        expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
    });
    it("", () => {
        expect(letterCombinations("")).toEqual([]);
    });
});
/**
 * (ab)3 => ababab
 * ((ab)3)2 => abababababab
 * 
 * */ 

const formatter = str => {
    const strAsArray = str.split("");
    const formattedStrings = [];
    let intermediateString = "";
    let brackets = [];

    for (let i = 0; i < strAsArray.length; i++) {
        if (strAsArray[i] === '(') {
            brackets.push('(');
        } else if (strAsArray[i] === ')') {
            if (brackets.length < 1) {
                return '';
            }
            brackets.pop();
            let string = '';
            let rounds = strAsArray[i + 1];
            if (!isNaN(rounds)) {
                for(let j = 0; j < rounds; j++) {
                    string = string + intermediateString;
                }
                intermediateString = string;
                i++;
            } 
            if(brackets.length < 1) {
                formattedStrings.push(intermediateString);
                intermediateString = '';
            } else {
                intermediateString = string;
            }
        } else {
            intermediateString += strAsArray[i];
        }
    }
    return formattedStrings.join('');
};

describe("formatter", () => {
    it("(ab)3", () => {
        expect(formatter("(ab)3")).toEqual("ababab")
    })
    it("((ab)3)2", () => {
        expect(formatter("((ab)3)2")).toEqual("abababababab")
    })
    it("(ab)3(bc2)", () => {
        expect(formatter("(ab)3(bc)2")).toEqual("abababbcbc")
    })
    it("(ab)(bc2)", () => {
        expect(formatter("(ab)(bc)2")).toEqual("abbcbc")
    })
});
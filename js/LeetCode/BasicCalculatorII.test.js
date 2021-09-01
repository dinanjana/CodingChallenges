const calculate = s => {
    const str = s.replace(/ /g,'').split("");
    const stack = [];
    let pendingOperator = null;
    let currentNumber = null;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!isAnOperator(char)) {
            currentNumber = currentNumber ? currentNumber + char : char;
        } else {
            if (currentNumber && pendingOperator) {
                processForMultiplicationAndDivison(currentNumber, pendingOperator, stack);
                currentNumber = null;
                pendingOperator = null;
            } else if (currentNumber) {
                stack.push(parseInt(currentNumber));
                currentNumber = null;
            } 
            if (char === '*' || char === '/') {
                pendingOperator = char;
            }
            if (char === '-') {
                currentNumber = char;
            }

        }
    }
    if (currentNumber && pendingOperator) {
        processForMultiplicationAndDivison(currentNumber, pendingOperator, stack);
        currentNumber = null;
        pendingOperator = null;
    } else if (currentNumber) {
        stack.push(parseInt(currentNumber));
        currentNumber = null;
    }
    let res = 0;
    for (let i = 0; i < stack.length; i++) {
        res += stack[i];
    }
    return res;
};

const isAnOperator = char => {
    if (char === '*' || char === '/' || char === '-' || char === '+') {
        return true;
    }
};

const processForMultiplicationAndDivison = (currentNumber, pendingOperator, stack) => {
    const number = parseInt(currentNumber);  
    const prevNumber = stack.pop();
    
    if (pendingOperator === '*') {
        stack.push(number * prevNumber);
    } else {
        const sol = prevNumber / number
        stack.push(sol > 0 ? Math.floor(sol) : Math.ceil(sol));    
    }
};

describe("", () => {
    it("3+2*2", () => {
        expect(calculate("3+2*2")).toBe(7);
    });
    it("3+20*2", () => {
        expect(calculate("3+20*2")).toBe(43);
    });
    it("3+ 5 / 2", () => {
        expect(calculate("3+ 5 / 2")).toBe(5);
    });
    it("3", () => {
        expect(calculate("3")).toBe(3);
    });
    it("14-3/2", () => {
        expect(calculate("14-3/2")).toBe(13);
    })
    it("14/3*2", () => {
        expect(calculate("14/3*2")).toBe(8);
    })
    it("1/2", () => {
        expect(calculate("1/2")).toBe(0);
    })
});
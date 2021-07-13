/**
 * n = 4
 * (((()))) => ((()())) => ((())()) => ((()))() => (()())() => (())(())  => (())()() => ()(())() => ()()(()) => ()()()()
 * ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
 * ["(((())))","((()()))","((())())","((()))()","(()())()","(())(())","(())()()","()(())()","()()(())","()()()()"]
*/

const generateParenthesis = n => {
    let parenthesis = getInitialData(n);
    const result = [];
    let i = getClosesInnerParenthesis(parenthesis);
    result.push(parenthesis.join(""))

    while(!completed(parenthesis)) {
        if((i < parenthesis.length - 4) && parenthesis[i+2] === ')' && parenthesis[i+3] === '(') {
            parenthesis[i] = ')';
            parenthesis[i+1] = '(';
            parenthesis[i+2] = '(';
            parenthesis[i+3] = ')';
            i += 2;
            //console.log(parenthesis)
        } else if((i < parenthesis.length - 2) && parenthesis[i+2] === ')') {
            parenthesis[i] = ')';
            parenthesis[i+1] = '(';
            parenthesis[i+2] = ')';
            i += 1;
            //console.log(parenthesis)
        }
        if (i === parenthesis.length - 2) {
            i = getClosesInnerParenthesis(parenthesis);
        }
        result.push(parenthesis.join(""));
        console.log(result);
    }
    return result;
};

const getInitialData = n => {
    let data = [];
    for(let i = 0; i <= 2*n -1; i++) {
        if (i < n) {
            data.push('(');
        } else {
            data.push(')');
        }
    }
    return data;
};

// Get starting idx of closest complete bracket
const getClosesInnerParenthesis = parenthesis => {
    let idx = null;
    parenthesis.forEach((elem, i) => {
        if(idx === null && elem === ')') {
            idx = i - 1;
        }
    });
    return idx;
}

// Check if the string is in the form of ()()()....
const completed = parenthesis => {
    for(let i = 0; i < parenthesis.length; i++) {
        if(parenthesis[i] === ')' && parenthesis[i-1] !== '(') {
            return false;
        }
    }
    return true;
}


describe('generateParenthesis', () => {
    it('n=3', () => {
        expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
    })
});

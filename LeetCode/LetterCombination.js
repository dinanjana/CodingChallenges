

const letterCombinations = digits => {
    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    const numbers = digits.split("");
    let res = map[numbers[numbers.length - 1]] || [];
    for(let i = numbers.length - 2; i >= 0; i--) {
        res = generatePaths(map[numbers[i]], res);
    }
    return res;
};

const generatePaths = (nodes1, nodes2) => {
    return nodes1.reduce((acc, node1) => { 
        nodes2.map(node2 => acc.push(node1 + node2));
        return acc;
    }, []);
};

module.exports = {
    letterCombinations
};
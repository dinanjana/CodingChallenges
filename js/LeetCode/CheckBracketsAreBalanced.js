const isBalancedBrackets = (str) => !str.split('').reduce((acc, char) => {
  const brackets = { ')': '(', '}': '{', ']': '[' };
  const openingBracket = brackets[char];
  if (openingBracket) {
    if (openingBracket === acc[acc.length - 1]) {
      acc.pop();
      return acc;
    }
  }
  acc.push(char);
  return acc;
}, []).length;

//true
console.log(isBalancedBrackets('()[]'));

//false
console.log(isBalancedBrackets('()[]{'));

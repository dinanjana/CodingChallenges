const myAtoi = s => {
    let ve = 1;
    const MAX = 2 ** 32 - 1;
    const MIN = -1 * 2 ** 31;
    const number = s.split('').reduce((acc, digit, idx, str) => {
      let { started, ended, number } = acc;
      if (/^\d+$/.test(digit)) {
        if (started && !ended) {
          number.push(digit)
        } else if(!started) {
          if (str[idx-1] === '-') {
            ve = -1;
          }
          number.push(digit);
          started = true;
          ended = false;
        }
      } else {
        if (![" ", "-", "+"].find(el => el === digit) || ["-", "+"].find(el => el === str[idx - 1])) {
          started = true;
        }
        ended = true;
      }
      return { started, ended, number };
    }, { number: [] }).number.reduce((acc, digit, idx, number) => {
      acc += digit * 10 ** (number.length - 1 - idx);
      return acc; 
     }, 0) * ve; 
    return MAX < number ? MAX : MIN > number ? MIN : number;
  };
  //-10
  console.log(myAtoi('-10k0'))
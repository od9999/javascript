const leftBrackets = new Set(['(', '[', '{']);
function isBracketsMatched(str) {
  if (str.length % 2 == 1) { // 如果括号的长度为奇数，肯定是不匹配的
    return false;
  }
  const stack = [];
  for (let val of str) {
    if (val === '(') {
      stack.push(')');
    } else if (val === '[') {
      stack.push(']');
    } else if (val === '{') {
      stack.push('}');
    } else if (stack.length === 0 || val !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
console.log(isBracketsMatched('{}'));
console.log(isBracketsMatched('{[({})]}'));
console.log(isBracketsMatched('{[}]'));
const leftBrackets = new Set(['(', '[', '{']);
const rightBrackets = new Set([')', ']', '}']);
const bracketsMap = {
  '(': ')',
  '[': ']',
  '{': '}',
  ')': '(',
  ']': '[',
  '}': '{',
};
// 1 . 当碰到( [ { 这些左括号就进栈。
// 2 . 如果碰到) ] }这些右括号时，如果栈为空，则肯定不匹配，返回false。如果栈不为空，则出栈比较两个括号是否匹配不匹配返回 false 。
// 3 . 如果遍历完整个括号串后栈为空返回true，否则返回false。
function isBracketsMatched(str) {
  const stack = [];
  for (const val of str) {
    if (leftBrackets.has(val)) {
      stack.push(val);
    } else if (rightBrackets.has(val)) {
      if (!stack.length) {
        return false;
      } else if (bracketsMap[val] !== stack.pop()) {
        return false;
      }
    }
  }
  return !stack.length;
}
console.log(isBracketsMatched('{}')); // true
console.log(isBracketsMatched('{}[]')); // true
console.log(isBracketsMatched('{[({})]}')); // true
console.log(isBracketsMatched('{aaa[w({cccc})]ww}')); // true
console.log(isBracketsMatched('{[}]')); // false

function isBracketsMatched2(str) {
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
// console.log(isBracketsMatched2('{}'));
// console.log(isBracketsMatched2('{}[]'));
// console.log(isBracketsMatched2('{[({})]}'));
// console.log(isBracketsMatched2('{[}]'));
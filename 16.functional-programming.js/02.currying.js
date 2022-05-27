// 在实现add(1)(2, 3)(4)() = 10的基础上 改成add(1)(2, 3)(4) = 10
// const currying = (fn) => {
//   let args = [];
//   function next(...argvs) {
//     args = args.concat(argvs);
//     if (fn.length === args.length) {
//       return fn(...args);
//     }
//     return next;
//   };
//   return next;
// };
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}

function add1(a, b, c) {
  return a + b + c;
}

const curried1 = currying(add1);

function add2(a, b, c, d) {
  return a + b + c + d;
}
const curried2 = currying(add2);

console.log(curried1(1)(2)); //  function next
console.log(curried1(1)(2)(3)); // 6
console.log(curried2(1)(2)(3)); //  function next
console.log(curried2(1)(2)(3)(4)); // 10
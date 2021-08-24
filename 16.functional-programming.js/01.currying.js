// 在实现add(1)(2, 3)(4)() = 10的基础上 改成add(1)(2, 3)(4) = 10
const currying = (fn) => {
  let args = [];
  function next(...argvs) {
    args = args.concat(argvs);
    return next;
  };
  next.toString = next.valueOf = () => fn(...args);
  return next;
};

const add = currying((...args) => {
  return args.reduce((cur, s) => s + cur, 0);
});


console.log(1 + add(1)(2, 3)(4));
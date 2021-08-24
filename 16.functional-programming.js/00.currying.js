// 柯里化，可以理解为提前接收部分参数，延迟执行，不立即输出结果，而是返回一个接受剩余参数的函数。
// eg： 实现add(1)(2, 3)(4)() = 10

const currying = (fn) => {
  let args = [];
  return function next(...argvs) {
    if (argvs.length === 0) {
      return fn(...args);
    } else {
      args = args.concat(argvs);
      return next;
    }
  };
};

const add = currying((...args) => {
  return args.reduce((cur, s) => s + cur, 0);
});


const b = add(1)(2, 3)(4)
console.log(b());
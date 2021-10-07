
const A = function () { };
A.prototype.n = 1;
const proto = A.prototype;
const a = new A();

A.prototype = {
  n: 2,
  m: 3
};
// 扩展追加 上面换成下面的写法
// A.prototype.n = 2;
// A.prototype.m = 3;

const b = new A();

console.log(a.n); // 2
console.log(a.m); // 3


console.log(b.n); // 2
console.log(b.m); // 3

console.log(a.__proto__ === proto);
console.log(b.__proto__ === proto);

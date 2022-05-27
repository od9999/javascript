const { observable } = require('mobx');
let num = observable.box(10);
let str = observable.box('hello');
let bool = observable.box(true);

console.log(num.get(), str.get(), bool.get());
num.set(100);
str.set('world');
bool.set(false);
console.log(num.get(), str.get(), bool.get());
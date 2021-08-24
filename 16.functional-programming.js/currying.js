// 函数柯里化 实现方法: 闭包 或者 bind
// const add = x => y => x + y;
const add = function(x) {
    return function(y) {
        return x + y;
    };
};

const increment = add(1);
const addFive = add(5);

console.log(increment(3));
//4

console.log(addFive(10));
// 15



var currying = function (fn) {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        [].push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    };
};

var adder = function () {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        [].push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    };
};
var sum = adder();
console.log(sum);     // [Function]

sum(100,200)(300);    // 调用形式灵活，一次调用可输入一个或者多个参数，并且支持链式调用
sum(400);
console.log(sum());   // 1000 （加总计算）


// 严格模式下arguments.callee不能使用 可以使用命名函数来达到相同的效果:
var currying = function (fn) {
    var _args = [];
    return function _curry() {
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        [].push.apply(_args, [].slice.call(arguments));
        return _curry;
    };
};

var adder = function () {
    var _args = [];
    return (function _adder() {
        if (arguments.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        [].push.apply(_args, [].slice.call(arguments));
        return _adder;
    });
};
var adder2 = function () {
    var _args = Array.prototype.slice.call(arguments);
    return function _adder() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        _args = _args.concat(args);
        return _adder;
    };
};
console.log('----------');
var sum = adder2(100,200);
console.log(sum);     // [Function]

sum(100,200)(300);    // 调用形式灵活，一次调用可输入一个或者多个参数，并且支持链式调用
sum(400);
console.log(sum());   // 1000 （加总计算）


console.log('----------');
function add1(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(add1(1,2,3));

console.log('----------');
function sayHello(name, age) {
    console.log(name, age);
}
var newSayHello = sayHello.bind(null, 'zr');
sayHello('od', 23);
newSayHello(23);
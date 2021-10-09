// 模拟bind
// Function.prototype.bind = function(context, ...args) {
//     let self = this;
//     return function(...argv) {
//         return self.apply(context, args.concat(argv));
//     };
// };

// Function.prototype.bind = function(context, ...args) {
//     return (...argv) => {
//         return this.apply(context, args.concat(argv));
//     };
// };

Function.prototype.bind = function(context, ...args) {
    // var args = Array.prototype.slice.call(arguments, 1);
    // var context = arguments[0];
    const self = this;
    return function f(...innerArgs) {
        // var innerArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(innerArgs));
    };
};

function test(a, b, c, d, e) {
	console.log(a, b, c, d, e);
    console.log(this.name);
	return 1;
}



global.name = 'aaa';

let obj = {
    name : 'bbb'
};

function test(a, b, c, d, e) {
	console.log(a, b, c, d, e);
    console.log(this.name);
	return 1;
}

console.log(test.bind(obj, 1, 2)(6,7,8,9));

Function.prototype.bind = function(context, ...args) {
    return (...argvs) => {
        return this.apply(context, args.concat(argvs));
    }
};

/**
 * 函数可能是一个构造函数
 */
Function.prototype.bind = function(context, ...args) {
    var self = this;
    function temp(...argvs) {
        return self.apply(context, args.concat(argvs));
    }
    temp.prototype = self.prototype;
    return temp;
};


/**
 * https://262.ecma-international.org/5.1/#sec-11.9.3
 * https://262.ecma-international.org/5.1/#sec-9.1
 * ==运算符
 * 1. null == undefined  // true
 * 2. null 和 undefined不会转成其他值
 * 3. 两个是同一个对象 才返回true
 * 3. 只要有一个操作数是NaN 返回false
 * 4. 如果有一个是布尔值 先转成数值 false转成0 true转成1
 * 5. 如果有一个是字符串 另一个是数值 字符串先转成数值
 * 6. 如果有一个是对象 另一个不是 调用对象的valueOf(),把结果再进行前面规则比较
 */

console.log(null == undefined);     // true
console.log(false == null);   // false
console.log(false == '');     // true
console.log(NaN == false);    // false
console.log(undefined == false);    // false
console.log(null == false);    // false

let obj = {
	a: 1,
	valueOf: function() {
		console.log('valueOf');
		return 2;
	},
	toString: function () {
        console.log('toString');
		return 3;
	}
};
console.log('------------------');
console.log(obj.valueOf() === obj);
console.log(obj == 2);
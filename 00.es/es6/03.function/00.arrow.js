
/**
 * 箭头函数有几个使用注意点。
 （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
 （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
 * @param a
 */
const arrow = a => a + 1;
console.log(arrow.prototype);   // undefined
console.log(arrow.__proto__ === Function.prototype);	// true
console.log(arrow instanceof Function);					// true
console.log(Object.prototype.toString.call(arrow));	// [object Function]

let obj = {
    getThis: function () {
        return this;
    },

    // 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    getThisArrow: () => this
};

console.log(obj.getThis() === obj);         // true
console.log(obj.getThisArrow() === obj);    // false
console.log(obj.getThisArrow() === this);    // true, 浏览器中是window
console.log(obj.getThisArrow());    // {}
console.log(this);    // {}

console.log('------------');
let obj2 = {
    name: 'od',
    getName() {
        return this.name;
    },

    // 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    getNameArrow() {
        console.log(this);      // node文件中是{} repl是global 浏览器环境中是window
        return this.name;
    },

    getNameArrow2() {
        const say = () => {
            return this.name;
        };
        console.log(this === obj2); // true
        return say();
    }
};

console.log(obj2.getName());        // od
console.log(obj2.getNameArrow());   // undefined
console.log(obj2.getNameArrow2());   // od

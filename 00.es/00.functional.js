//函数式编程

/**
 * 1. 面向过程编程：以过程为中心的编程思想 想到什么写什么 如jquery操作dom
 * 2. 面向对象编程：从数据结构的角度出发
 *     - 具有相同特性（数据元素）和行为（功能）的对象的抽象就是类
 *     - 对象的抽象是类 类的实例是对象
 *     - 类实际上就是一种数据结构
 * 3. 面向函数编程： 从算法角度出发，也就是从行为的角度出发，体现的一些编程原则
 *     - 不要重复自己
 *     - 高内聚 低耦合
 *     - 最小意外原则
 *     - 单一指责
 */

/**
 * 1.纯函数
 * 纯函数无副作用，仅仅依赖于函数的输入，并且当输入相同时输出保持一致
 */

// 纯函数
const add10 = a => a + 10;

// 依赖于外部变量的非纯函数
let x = 10;
const addx = a => a + x;

// 会产生副作用的非纯函数
const setx = v => x = v;

/**
 * 2.函数组合
 */
const add1 = a => a + 1;
const times2 = a => a * 2;
const compose = (a, b) => (c) => a(b(c));
const add1OfTimes2 = compose(add1, times2);
console.log(add1OfTimes2(5)); // 11



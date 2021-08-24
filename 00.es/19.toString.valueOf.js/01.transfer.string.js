/**
 * 大概的粗略的转换规则：(先toString后valueOf)
 * 如果 toString 方法存在并且返回原始类型，返回 toString 的结果。
 * 如果 toString 方法不存在或者返回的不是原始类型，调用 valueOf 方法，如果 valueOf 方法存在，并且返回原始类型数据，返回 valueOf 的结果。
 * 其他情况，抛出错误。
 */

const obj = {
    toString() {
        console.log('obj.toString----');
        return {};
    },
    valueOf() {
        console.log('obj.valueOf-----');
        return '110';
    }
};
console.log(obj + '1');
console.log(obj + 1);

const obj2 = {
    toString() {
        console.log('obj2.toString----');
        return {};
    },
    valueOf() {
        console.log('obj2.valueOf-----');
        return {};
    }
};
// console.log(String(obj2));
// console.log(obj2 + '1');    // TypeError: Cannot convert object to primitive value

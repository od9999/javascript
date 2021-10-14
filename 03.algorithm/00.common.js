// 判断一个单词是否是回文？
function isPalindrom(str) {
    return str == str.split('').reverse().join('');
}

console.log(isPalindrom('mamam'));
console.log(isPalindrom('redivider'));


// 去掉一组整型数组重复的值
/**
 *比如输入: [1,13,24,11,11,14,1,2]
  输出: [1,13,24,11,14,2]
  需要去掉重复的11 和 1 这两个元素。
 */

let unique = function(arr) {
    let hashTable = {};
    let data = [];
    for(let i = 0, length = arr.length; i < length; i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
};
let unique2 = function(arr) {
    return Array.from(new Set(arr));
};
console.log(unique([1,13,24,11,11,14,1,2]));
console.log(unique2([1,13,24,11,11,14,1,2]));

// 统计一个字符串出现最多的字母
// 输入 ： afjghdfraaaasdenas
// 输出 ： a
function getMaxDuplicateChar(str) {
    if(str.length == 1) {
        return str;
    }
    let charObj = {};
    let maxChar = '';
    let maxValue = 1;
    for(let i = 0, length = str.length; i < length; i++) {
        let key = str.charAt(i);
        if(!charObj[key]) {
            charObj[key] = 1;
        } else {
            charObj[key] += 1;
        }
        if(charObj[key] > maxValue){
            maxValue = charObj[key];
            maxChar = key;
        }
    }

    return maxChar;
}
console.log(getMaxDuplicateChar('afzzzzzzzzzzjghdfraazzzzzzzzzzzzaasdenas'));


// 二叉树 给出中序、前序 找出后续

// 链表从后到前 输出。栈 或 递归

// 旋转数组的最小数字  [3, 4, 5 ,1 ,2]的最小数字是1
// 两个指针index1 = 0 index2 = length - 1 二分查找 不断改变index1和index2 最后 index2就是找到的值

// 2个单链表相交 找到第一个相交的点
// 一个单链表 如何找到找到倒数第k个节点(只允许遍历一次链表) 2个指针 保持距离为k 同时遍历这个链表
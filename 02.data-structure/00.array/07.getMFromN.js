function getMFromN(arr, array, n, sum) {
  if (sum < 0 || n < 0 || array.length === 0) {
    return;
  }
  if (sum === 0 && n === 0) {
    console.log('---');
    arr.forEach(item => console.log(item));
    return;
  }
  arr = Array.from(arr);
  array = Array.from(array);
  const firstNum = array.shift();
  getMFromN(arr, array, n, sum);
  arr.push(firstNum);
  getMFromN(arr, array, n - 1, sum - firstNum);
}
// getMFromN([], [1, 2, 3, 6, 8, 9], 3, 11);


// http://www.conardli.top/docs/algorithm/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95/%E5%92%8C%E4%B8%BAsum%E7%9A%84n%E4%B8%AA%E6%95%B0.html#%E9%A2%98%E7%9B%AE
// 题目
// 给定无序、不重复的数组data，取出 n 个数，使其相加和为sum
// #思路
// 基于上面字符串排列题目的变形，我们从array中取出n个数的全排列，在取的同时判断是否符合条件。
function getAllCombine(array, n, sum, temp = []) {
  if (temp.length === n) {
    if (temp.reduce((t, c) => t + c) === sum) {
      return temp;
    }
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const current = array.shift();
    temp.push(current);
    const result = getAllCombine(array, n, sum, temp);
    if (result) {
      return result;
    }
    temp.pop();
    array.push(current);
  }
}
const arr = [4, 5, 6, 3, 2, 1];
console.log(getAllCombine(arr, 3, 10)); // [ 4, 5, 1 ]


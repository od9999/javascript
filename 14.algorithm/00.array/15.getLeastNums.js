// ac地址：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 原文地址：https://xxoo521.com/2020-02-21-least-nums/

// 回顾快速排序中的 partition 操作，可以将元素arr[0]放入排序后的正确位置，并且返回这个位置index。利用 partition 的特点，算法流程如下：

// 如果index = k，说明第 k 个元素已经放入正确位置，返回前 k 个元素
// 如果k < index，前 k 个元素在[left, index - 1]之间，缩小查找范围，继续查找
// 如果index < k，前 k 个元素在[index + 1, right] 之间，缩小查找范围，继续查找
// 为了方便理解，可以使用2, 8, 1, 1, 0, 11, -1, 0

/**
 * 最小的k个数
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function partiton(arr, start, end) {
  const k = arr[start];
  let left = start + 1,
    right = end;
  while (1) {
    while (left <= end && arr[left] <= k) ++left;
    while (right >= start + 1 && arr[right] >= k) --right;

    if (left >= right) {
      break;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    ++left;
    --right;
  }
  [arr[right], arr[start]] = [arr[start], arr[right]];
  return right;
}

/**
* @param {number[]} arr
* @param {number} k
* @return {number[]}
*/
var getLeastNumbers = function (arr, k) {
  const length = arr.length;
  if (k >= length) return arr;
  let left = 0,
    right = length - 1;
  let index = partiton(arr, left, right);
  while (index !== k) {
    if (index < k) {
      left = index + 1;
      index = partiton(arr, left, right);
    } else if (index > k) {
      right = index - 1;
      index = partiton(arr, left, right);
    }
  }

  return arr.slice(0, k);
};
const list = [2, 8, 1, 1, 0, 11, -1, 0];
console.log(getLeastNumbers(list, 3));
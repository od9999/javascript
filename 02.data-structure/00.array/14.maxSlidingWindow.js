// 滑动窗口的最大值
// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口 k 内的数字。
// 滑动窗口每次只向右移动一位。 返回滑动窗口最大值。
// http://www.conardli.top/docs/dataStructure/%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC.html#%E9%A2%98%E7%9B%AE
var maxSlidingWindow = function (nums, k) {
  const window = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift();
    }
    let j = window.length - 1;
    while (j >= 0 && nums[window[j]] <= nums[i]) {
      j--;
      window.pop();
    }
    window.push(i);
    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }
  return result;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // [ 3, 3, 5, 5, 6, 7 ]
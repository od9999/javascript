/**
 * 假如有一个数字，其中一个数字出现的次数>=元素个数的一半 如何找到这个数?
 * 如[1, 5, 7, -4, 1, 1, 1]中1出现的次数超过元素的一半
 */
function getMaxCountNum(arr) {
  let candidate;
  let nTimes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (nTimes === 0) {
      candidate = arr[i];
      nTimes = 1;
    } else {
      if (candidate === arr[i]) {
        nTimes++;
      } else {
        nTimes--;
      }
    }
  }
  return candidate;
}

console.log(getMaxCountNum([1, 5, 7, -4, 1, 1, 1]));

// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

// 提示：

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104 

// 思路：
// 1、先对每个区间左端点做升序排序
// 2、如果待合并区间左端点比目前已合并的区间右端点值大，则区间不重叠，放入结果数组
// 3、否则区间重叠，将待合并区间右端点更新为已合并与待合并右端点的最大值
// 3、遍历结束后返回
function merge(intervals) {
  if (!intervals || intervals.length == 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    // 当前区间的起始值 比结果数组最后一个区间的终止值大的话 没有重叠，直接push
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
    }
  }
  return res;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[ 1, 6 ], [ 8, 10 ], [ 15, 18 ]]
console.log(merge([[1,4],[4,5]])); // [[ 1, 5 ]]

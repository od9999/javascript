// https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&&tqId=11154&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
function find(target, array) {
  const rowNum = array.length;    //一维数组的个数
  if (!rowNum) {
    return false;
  }
  const colNum = array[0].length;    //每个一维数组的长度
  if (!colNum) {
    return false;
  }

  let row = 0,
    col = colNum - 1;
  while (row < rowNum && col >= 0) {    //从每一一维数组的末尾进行查找
    if (array[row][col] === target) {
      return true;
    } else if (array[row][col] > target) {
      --col;
    } else {
      ++row;
    }
  }
  return false;
}

const target = 7;
const array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];

console.log(find(target, array));
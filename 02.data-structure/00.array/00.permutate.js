function permutate(list) {
  const result = [];
  if (list.length > 1) {
    //遍历每一项
    for (let i = 0; i < list.length; i++) {
      //拿到当前的元素
      const left = list[i];
      //除当前元素的其他元素组合
      const rest = [
        ...list.slice(0, i),
        ...list.slice(i + 1, list.length)
      ];
      //上一次递归返回的全排列
      const preResult = permutate(rest);
      //组合在一起
      for (let j = 0; j < preResult.length; j++) {
        const tmp = [left, ...preResult[j]];
        result.push(tmp);
        // result.push(...preResult);
      }
    }
  } else if (list.length === 1) {
    result.push(list);
  }
  return result;
}

function fullPermutate(arr) {
  const result = [];
  for (let i = 1; i <= arr.length; i++) {
    const step = i;
    for (let j = 0; j + step <= arr.length; j++) {
      const list = arr.slice(j, j + step);
      result.push(
        ...permutate(list)
      );
    }
  }
  return result;
}

const list = [1, 2, 3];
console.log(permutate(list));
console.log(fullPermutate(list));
// [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ]
// ]
// [
//   [ 1 ],       [ 2 ],
//   [ 3 ],       [ 1, 2 ],
//   [ 2, 1 ],    [ 2, 3 ],
//   [ 3, 2 ],    [ 1, 2, 3 ],
//   [ 1, 3, 2 ], [ 2, 1, 3 ],
//   [ 2, 3, 1 ], [ 3, 1, 2 ],
//   [ 3, 2, 1 ]
// ]
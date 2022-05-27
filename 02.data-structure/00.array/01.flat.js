const flatten = arr => arr.reduce((prev, cur) => prev.concat(
  Array.isArray(cur) ? flatten(cur) : cur
), []);

function flat(arr, num = 1) {
  return num > 0
    ? arr.reduce(
      (pre, cur) =>
        pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur),
      []
    )
    : arr.slice();
}

// 栈思想
function flat2(arr) {
  const result = [];
  const stack = [].concat(arr);  // 将数组元素拷贝至栈，直接赋值会改变原数组
  //如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组再次入栈，并且展开了一层
    } else {
      result.unshift(val); //如果不是数组就将其取出来放入结果数组中
    }
  }
  return result;
}
const list = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
const list2 = flat2(list);
console.log(list2);
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];


// const arr = [1, 2, [3, 4, [5, 6]]];
// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(flatten(arr));
// console.log(arr);
// console.log(flat(arr2));
let obj1 = {
  a: 10,
  b: {
    x: 10,
    y: 20,
  },
};
let obj2 = {
  a: 10,
  b: {
    x: 10,
    y: 20,
  },
};
function isObject(obj) {
  //将null排除在外
  return typeof obj === "object" && obj !== null;
}
function equalDeep(obj1, obj2) {
  //如果是基本数据类型直接比较
  if (!isObject(obj1) && !isObject(obj2)) {
    //通过此判断的值为值类型或者function类型，但function暂时不做考虑
    return obj1 === obj2;
  }
  //判断是否为同一个对象
  if (obj1 === obj2) {
    return true;
  }
  // 判断长度是否一致
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // 深度遍历属性
  for (let key in obj1) {
    let equal = equalDeep(obj1[key], obj2[key]);
    if (!equal) {
      return false;
    }
  }
  return true;
}
const res = equalDeep(obj1, obj2);
console.log(res);
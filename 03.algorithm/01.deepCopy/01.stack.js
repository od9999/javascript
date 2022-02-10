const getType = v => {
  switch (Object.prototype.toString.call(v)) {
    case '[object Object]':
      return 'Object';
    case '[object Array]':
      return 'Array';
    default:
      // 只考虑数组和对象，其余都是简单值
      return false;
  }
};

// 99%的递归都可以用如下的思想实现非递归
// js全局是有一个函数调用栈，当我们调用一个函数 a 时，这个函数 a 入栈，函数 a 内再次调用 a 时，一个新的函数 a 再次入栈。
// 执行完毕依次弹出栈。多个函数的话也是类似的流程。
// 用非递归解法的本质就是使用队列或者栈的数据结构来模拟 js 调用栈的执行过程

const copy2 = (source) => {
  if (!getType(source)) {
    // 简单值
    return source;
  }
  let dest = Array.isArray(source) ? [] : {};
  const queue = [{ source, dest }];
  // 解决循环引用，导致调用栈溢出问题
  const map = new WeakMap();

  while (queue.length) {
    const { dest, source } = queue.shift();
    const type = getType(source);
    if (type === "Array") {
      // 数组
      source.forEach((x, index) => {
        const xType = getType(x);
        if (!getType(x)) {
          dest[index] = x;
          return;
        }

        if (xType === "Array") {
          dest[index] = [];
          queue.push({
            source: x,
            dest: dest[index],
          });
          return;
        }

        if (xType === "Object") {
          if (map.get(x)) {
            dest[index] = map.get(x);
            return;
          }
          dest[index] = {};
          queue.push({
            source: x,
            dest: dest[index],
          });
          map.set(x, dest[index]);
          return;
        }
      });
    } else {
      // 对象
      for (let [k, v] of Object.entries(source)) {
        const vType = getType(v);
        if (!vType) {
          dest[k] = v;
          continue;
        }
        if (vType === "Array") {
          dest[k] = [];
          queue.push({
            source: v,
            dest: dest[k],
          });
        }
        if (vType === "Object") {
          if (map.get(v)) {
            dest[k] = map.get(v);
            continue;
          }
          dest[k] = {};
          queue.push({
            source: v,
            dest: dest[k],
          });
        }
        map.set(v, dest[k]);
      }
    }
  }
  return dest;
};


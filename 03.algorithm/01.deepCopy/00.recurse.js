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

const copy = (source) => {
  // 解决循环引用问题
  const map = new WeakMap();

  const _cp = (source) => {
    let dest;
    if (map.get(source)) {
      return map.get(source);
    }

    const type = getType(source);
    if (type === 'Array') {
      // 数组
      dest = [];
      map.set(source, dest);
      source.forEach((item, index) => {
        dest[index] = _cp(item);
      });
      return dest;
    } else if (type === 'Object') {
      // obj
      dest = {};
      map.set(source, dest);
      for (let [k, v] of Object.entries(source)) {
        dest[k] = _cp(v);
      }
      return dest;
    } else {
      return source;
    }
  };

  return _cp(source);
};

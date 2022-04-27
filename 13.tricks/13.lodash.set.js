function set(target, path, value) {
  const paths = `${path}`.match(/(\w|\$)+/g)
  if (paths && paths.length) {
    const lastKey = paths.pop();
    const last = get(target, paths.join('.'), {})
    last[lastKey] = value
  }
  return target;
}
function set(obj, path, value) {
  path = Array.isArray(path) ? path :  path.replace('[', '.').replace(']', '').split('.');
  src = obj;
  path.forEach((key, index, array) => {
    if (index == path.length - 1) {
      src[key] = value;
    } else {
      if (!src.hasOwnProperty(key)) { // if the key doesn't exist on object
        const next = array[index + 1];
        src[key] = String(Number(next)) === next ? [] : {}; // create a new object if next is item in array is not a number
      }
      src = src[key];
    }
  });
}
const a = {};
set(a, "images[0].url", "xxxx");
console.log(a); // { images: [ { url: 'xxxx' } ] }
set(a, "images[0].width", 300);
console.log(a); // { images: [ { url: 'xxxx', width: 300 } ] }
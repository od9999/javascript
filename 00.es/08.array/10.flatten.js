const flatten = arr => arr.reduce((prev, cur) => prev.concat(
    Array.isArray(cur) ? flatten(cur) : cur
), []);


const arr = [1, 2, [3, 4, [5, 6]]];
console.log(flatten(arr));
console.log(arr);
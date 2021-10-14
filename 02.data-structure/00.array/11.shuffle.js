const shuffleArray = arr => {
  const result = Array.from(arr);
  let m = arr.length,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    [result[m], result[i]] = [result[i], result[m]];
  }
  return result;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffleArray(arr));
console.log(arr);

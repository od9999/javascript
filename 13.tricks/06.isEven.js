const isEven = (num) => {
  return (num & 1) === 0;
};


console.log(isEven(1));
console.log(isEven(4));

console.log(isEven(-3));
console.log(isEven(-4));

console.log(isEven(-0));
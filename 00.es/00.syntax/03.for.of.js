const obj = {
  a: 1,
  b: {
    name: 'Haha',
  },
};

const list = [1, 2, 3, null];
for (const iterator of list) {
  console.log('------');
  console.log(iterator);
  console.log(list[iterator]);
}

const entries = Object.entries(obj);
console.log(entries);
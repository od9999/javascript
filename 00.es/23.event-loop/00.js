setTimeout(() => {
  console.log('setTimeout1');
}, 2000);

setTimeout(() => {
  console.log('setTimeout2');
  Promise
    .resolve(1)
    .then(data => {
      console.log('Promise then1');
      console.log(data);
      return 2;
    })
    .then(data => {
      console.log('Promise then2');
      console.log(data);
      setTimeout(() => {
        console.log('setTimeout3');
      });
      return 2;
    });
  setTimeout(() => {
    console.log('setTimeout4');
  }, 500);
}, 1000);

console.log('script----');
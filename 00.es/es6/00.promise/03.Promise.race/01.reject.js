const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log('p1');
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2');
    reject(new Error('p2 error'));
  }, 1000);
});

const p3 = new Promise(resolve => {
  setTimeout(() => {
    console.log('p3');
    resolve(3);
  }, 1500);
});

const race = Promise.race([p1, p2, p3]);
race.then(data => {
  console.log('then---');
  // 2
  console.log(data);
  // false 不是同一个promice对象
  console.log(race === p2);
}).catch(error => {
  console.log('catch---');
  console.log(error);
});

class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.runningCount = 0;
  }
  add = (promiseCreator) => {
    const promise = new Promise(resolve => {
      this.queue.push(() => {
        promiseCreator()
          .then(resolve)
          .then(() => {
            this.runningCount--;
            this.runNext();
          });
      });
    });
    this.runNext();
    
    return promise;
  };

  runNext() {
    if (this.runningCount >= this.limit || !this.queue.length) {
      // 如果正在执行的任务有两个或者没有后续了就不再继续了
      return;
    }
    this.runningCount++;
    // let fn = this.queue.splice(0, 1)[0];    // 出队一个任务
    const fn = this.queue.shift();
    fn();                                   // 并执行他
  }
}

const timeout = (time, data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};

const scheduler = new Scheduler(3);
const addTask = (time, order) => {
  scheduler
    .add(() => timeout(time, order))
    .then((a) => {
      console.log('cc----');
      console.log(a);
      return a;
    })
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');


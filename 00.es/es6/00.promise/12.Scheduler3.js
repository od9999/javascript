class Scheduler {
  constructor(max) {
    this.max = max;
    this.count = 0;
    this.queue = [];
  }
  add(task) {
    return new Promise(resolve => {
      this.queue.push([task, resolve]); // 关键，将 resolve 方法存入数组，执行任务后再调用
      this.schedule();
    });
  }
  schedule() {
    if (this.count < this.max && this.queue.length) {
      const [task, resolve] = this.queue.shift();

      task().then((data) => {
        resolve(data);
        this.count--;
        this.schedule();
      });

      this.count++;
    }
  }
}
// Usage
const timeout = (time, order) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(order);
    }, time);
  });
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  return scheduler.add(() => timeout(time, order)).then((a) => console.log(a, order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

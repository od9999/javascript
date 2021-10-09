const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('promise~');
  }, 1000);
}).then(data => {
  console.log('then---');
  console.log(data);
}).catch(e => {
  console.log('e---');
  console.log(e);
});

//传入一个正在执行的promise
function getPromiseWithAbort(p) {
  let obj = {};
  //内部定一个新的promise，用来终止执行
  let p1 = new Promise(function (resolve, reject) {
    obj.abort = reject;
  });
  obj.promise = Promise.race([p, p1]);
  return obj;
}

var obj = getPromiseWithAbort(promise)

obj.promise.then(res => { console.log(res) })

//如果要取消
obj.abort('取消执行');
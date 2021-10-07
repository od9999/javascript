// https://blog.csdn.net/xxtust/article/details/88841791
function multiply(a, b) {
  let len = a.length + b.length;
  let arr = new Array(len);
  arr.fill(0); //为了进行加法运算需要先初始化为0
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {  //倒序，从个位开始计算
      let mul = a[i] * b[j] + arr[i + j + 1];
      arr[i + j] += Math.floor(mul / 10);
      arr[i + j + 1] = mul % 10;
    }
  }
  return (arr.join('').replace(/^0+/, '')); // 去掉首位0
}

console.log(multiply('123', '45'));
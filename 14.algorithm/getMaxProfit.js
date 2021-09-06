// 找出下列正数组的最大差值

// 输入 [10,5,11,7,8,9]
// 输出 6

function getMaxProfit(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentPrice = arr[i];
    if (minPrice > currentPrice) {
      minPrice = currentPrice;
      startIndex = i;
    }
    // minPrice = Math.min(minPrice, currentPrice);
    const potentialProfit = currentPrice - minPrice;
    // maxProfit = Math.max(maxProfit, potentialProfit);
    maxProfit = Math.max(maxProfit, potentialProfit);
    if (maxProfit < potentialProfit) {
      maxProfit = potentialProfit;
      endIndex = i;
    }
  }

  return {
    maxProfit,
    startIndex,
    endIndex
  };
}
console.log(getMaxProfit([10, 5, 11, 7, 8, 9]));
console.log(getMaxProfit([10, 8, 6, 2, 1]));

function getMaxProfit2(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  console.log(min);
  console.log(max);
  return max - min;
}
// console.log(getMaxProfit2([10, 5, 11, 7, 8, 9]));


module.exports = getMaxProfit;
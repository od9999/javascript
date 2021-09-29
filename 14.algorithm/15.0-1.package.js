/*
0-1 背包问题：给定 n 种物品和一个容量为 C 的背包，物品 i 的重量是 wi，其价值为 vi 。

问：应该如何选择装入背包的物品，使得装入背包中的物品的总价值最大？



分析一波，面对每个物品，我们只有选择拿取或者不拿两种选择，不能选择装入某物品的一部分，也不能装入同一物品多次。


解决办法：声明一个 大小为  m[n][c] 的二维数组，m[ i ][ j ] 表示 在面对第 i 件物品，且背包容量为  j 时所能获得的最大价值 ，那么我们可以很容易分析得出 m[i][j] 的计算方法，

（1）. j < w[i] 的情况，这时候背包容量不足以放下第 i 件物品，只能选择不拿

m[ i ][ j ] = m[ i-1 ][ j ]

（2）. j>=w[i] 的情况，这时背包容量可以放下第 i 件物品，我们就要考虑拿这件物品是否能获取更大的价值。

如果拿取，m[ i ][ j ]=m[ i-1 ][ j-w[ i ] ] + v[ i ]。 这里的m[ i-1 ][ j-w[ i ] ]指的就是考虑了i-1件物品，背包容量为j-w[i]时的最大价值，也是相当于为第i件物品腾出了w[i]的空间。

如果不拿，m[ i ][ j ] = m[ i-1 ][ j ] , 同（1）

究竟是拿还是不拿，自然是比较这两种情况那种价值最大。
*/

const weightList = [4, 6, 2, 2, 5, 1];
const valueList = [8, 10, 6, 3, 7, 2];
const packageCapacity = 12;
const getPackageMaxValue = (weightList, valueList, packageCapacity) => {
  const table = [];
  for (let i = 0; i <= weightList.length; i++) {
    table.push((new Array(packageCapacity)).fill(0));
  }
  console.log(table);
  for (let i = 1; i <= weightList.length; i++) {
    for (let j = 1; j <= packageCapacity; j++) {
      if (j < weightList[i - 1]) { // 包容量为j，第i个物品放不下
        table[i][j] = table[i - 1][j];
      } else { // 能装
        table[i][j] = Math.max(
          table[i - 1][j],
          table[i - 1][j - weightList[i - 1]] + valueList[i - 1]
        );
      }
    }
  }
  console.log(table);
  const selectedIndexArr = (new Array(table.length - 1)).fill(false);
  const recur = (i, j) => {
    if (i > 0) {
      // 相等说明没装
      if (table[i][j] === table[i - 1][j]) {
        recur(i - 1, j);
      } else if (
        j - weightList[i - 1] >= 0
        && table[i][j] == table[i - 1][j - weightList[i - 1]] + valueList[i - 1]
      ) {
        selectedIndexArr[i - 1] = true;
        recur(i - 1, j - weightList[i - 1]);
      }
    }
  };
  recur(weightList.length, packageCapacity);
  return {
    selectedIndexArr,
    maxValue: table[weightList.length][packageCapacity]
  };

};


console.log(getPackageMaxValue(weightList, valueList, packageCapacity));

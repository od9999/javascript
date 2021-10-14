// 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

var pathSum = function (root, sum) {
  var result = [];
  if (root == null) {
    return result;
  }
  var sumResult = 0;
  var results = [];
  function backTracking(root, sum, sumResult, result) {
    sumResult += root.val;
    // 深拷贝
    result = [...result, root.val]; //之前写法：result.push(root.val);
    if (sumResult === sum && isLeaf(root)) {
      results.push(result);
      return;
    }
    if (root.left != null) {
      backTracking(root.left, sum, sumResult, result);
    }
    if (root.right != null) {
      backTracking(root.right, sum, sumResult, result);
    }
    // result.pop(); (不需要)
  };
  backTracking(root, sum, sumResult, result);
  return results;
};
// 是否是叶子节点
var isLeaf = function (root) {
  if (root.left == null && root.right == null) {
    return true;
  }
  return false;
}
// var isLeaf = root.right==null&&root.left==null;

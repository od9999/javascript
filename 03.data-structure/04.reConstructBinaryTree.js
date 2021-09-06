// https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&&tqId=11157&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  //如果先序遍历和中序遍历的长度均为0，那么返回null
  if (pre.length == 0 || vin.length == 0) {
    return null;
  };

  //新建树,根节点为先序遍历的第一个位置的元素
  var index = vin.indexOf(pre[0]);

  //从中序遍历拿到根节点的左右子树
  var left = vin.slice(0, index);
  var right = vin.slice(index + 1);

  //创建新节点
  var node = new TreeNode(vin[index]);

  //递归调用函数，实现新建节点循环
  node.left = reConstructBinaryTree(pre.slice(1, index + 1), left);
  node.right = reConstructBinaryTree(pre.slice(index + 1), right);

  //返回这个节点
  return node;
}

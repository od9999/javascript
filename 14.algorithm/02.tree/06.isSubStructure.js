// 判断B是否A的子结构
var isSubStructure = function (A, B) {
  // 判断是否是树的子结构有两种情况
  // 情况1：当前节点是子结构
  // 情况2：当前节点的左右子树是子结构
  // 如果A节点为空，或者B节点为空，都说明不是子树
  if (!A || !B) {
    return false;
  }
  return isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);

  function isSubTree(A, B) {
    // 如果B的节点为空，说明B已经遍历完了，说明此时B是A的子结构
    if (!B) {
      return true;
    }
    // 如果A都遍历完了，说明B不是子结构
    if (!A) {
      return false;
    }
    // 如果当前节点不同，则返回false
    if (A.val !== B.val) {
      return false;
    }
    // 当前节点相同，还要判断当前节点的左右子树是否都相同
    return isSubTree(A.left, B.left) && isSubTree(A.right, B.right);
  }
};

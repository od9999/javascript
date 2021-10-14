// https://www.nowcoder.com/practice/a9d0ecbacef9410ca97463e4a5c83be7?tpId=13&&tqId=11171&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pRoot TreeNode类 
 * @return TreeNode类
 */
function mirror(pRoot) {
  // write code here
  if (!pRoot) {
    return null;
  }
  [pRoot.left, pRoot.right] = [pRoot.right, pRoot.left];
  mirror(pRoot.left);
  mirror(pRoot.right);
  return pRoot;
}

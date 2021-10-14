var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};

function depth(node) {
  if (!node) return 0;
  var left = depth(node.left);
  var right = depth(node.right);
  return Math.max(left, right) + 1;
}
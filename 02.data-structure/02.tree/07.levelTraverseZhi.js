// 之字形顺序打印二叉树
// http://www.conardli.top/docs/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html
// 奇数从左到右，偶数从右到左
// 若当前层为奇数层，从左到右打印，同时填充下一层，从右到左打印（先填充左孩子节点再填充右孩子节点）。
// 若当前层为偶数层，从右到左打印，同时填充下一层，从左到右打印（先填充右孩子节点再填充左孩子节点）。
// 不难发现，我们可以使用栈来作为存储结构。
// 分别设定一个奇数栈和一个偶数栈， 从将二叉树头部元素存入奇数栈开始。
function Print(root) {
  const result = [];
  const oddStack = [];
  const evenStack = [];
  let temp = [];
  if (root) {
    oddStack.push(root);
    while (oddStack.length > 0 || evenStack.length > 0) {

      while (oddStack.length > 0) {
        const current = oddStack.pop();
        temp.push(current.val);
        if (current.left) {
          evenStack.push(current.left);
        }
        if (current.right) {
          evenStack.push(current.right);
        }
      }
      if (temp.length > 0) {
        result.push(temp);
        temp = [];
      }

      while (evenStack.length > 0) {
        const current = evenStack.pop();
        temp.push(current.val);
        if (current.right) {
          oddStack.push(current.right);
        }
        if (current.left) {
          oddStack.push(current.left);
        }
      }
      if (temp.length > 0) {
        result.push(temp);
        temp = [];
      }

    }
  }
  return result;
}
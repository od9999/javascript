// 反转链表

// 方法1：迭代法
function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }
  let prev = null;
  let curr = head;
  while (curr) {
    // 用于临时存储 curr 后继节点
    var next = curr.next;
    // 反转 curr 的后继指针
    curr.next = prev;
    // 变更prev、curr 
    // 待反转节点指向下一个节点 
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

// 方法2：递归法
function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }
  const next = head.next;
  // 递归反转
  const reverseHead = reverseList(next);
  // 变更指针
  // [next.next, head.next] = [head, null];
  next.next = head;
  head.next = null;
  return reverseHead;
};

// 逆序打印链表

// 栈 迭代
function reversePrint(head) {
  const stack = [head];
  let next = head.next;
  while (next) {
    stack.push(next);
    next = next.next;
  }
  while (stack.length) {
    console.log(stack.pop().value);
  }
}

// 递归
function reversePrint(head) {
  if (head) {
    if (head.next) {
      printRevese(head.next);
    }
    console.log(head.value);
  }
}
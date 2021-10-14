// 快慢指针
// 如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇
function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }
  let fast = head.next.next;
  let slow = head;
  while (fast !== slow) {
    if (!fast || !fast.next) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
}

// 快慢指针
// 如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇
function getCycleLength(head) {
  if (!head || !head.next) {
    return null;
  }
  let fast = head.next.next;
  let slow = head;
  // 1.判断是否有环
  while (fast != slow) {
    if (!fast || !fast.next) {
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  // 2.获取环的长度
  const temp = slow;
  let length = 1;
  slow = slow.next;
  while (temp !== slow) {
    slow = slow.next;
    length++;
  }
  // 3.找公共节点
  slow = fast = head;
  // fast先跑length步，当fast和slow相遇时即为链表的环的起点
  while (length > 0) {
    length--;
    fast = fast.next;
  }
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

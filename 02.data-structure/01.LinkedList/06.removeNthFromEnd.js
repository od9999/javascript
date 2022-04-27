// 删除链表的倒数第 N 个结点
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/qian-duan-shi-tang-ti-jie-chao-hao-li-ji-qv20/
// 快慢指针
// 先明确，删除倒数第 n 个结点，我们需要找到倒数第 n+1 个结点，删除其后继结点即可。

// 1.添加 prev 哨兵结点，处理边界问题。
// 2.借助快慢指针，快指针先走 n+1 步，然后快慢指针同步往前走，直到 fast.next 为 null。
// 3.删除倒数第 n 个结点，返回 prev.next。
class ListNode {

}
const removeNthFromEnd = function (head, n) {
  let prev = new ListNode(0);
  let fast = prev;
  let slow = prev;
  prev.next = head;
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return prev.next;
}
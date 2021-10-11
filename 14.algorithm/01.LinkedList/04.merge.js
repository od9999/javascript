// 合并两个排序的链表
// http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%8E%92%E5%BA%8F%E7%9A%84%E9%93%BE%E8%A1%A8.html#%E9%A2%98%E7%9B%AE
function merge(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  let head;
  if (head1.val < head2.val) {
    head = head1;
    head.next = merge(head1.next, head2);
  } else {
    head = head2;
    head.next = merge(head1, head2.next);
  }
  return head;
}
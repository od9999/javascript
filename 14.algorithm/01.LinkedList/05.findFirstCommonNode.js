// 两个链表的第一个公共节点
// http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%AC%E5%85%B1%E8%8A%82%E7%82%B9.html#%E9%A2%98%E7%9B%AE

// 1.先找到两个链表的长度length1、length2
// 2.让长一点的链表先走length2-length1步，让长链表和短链表起点相同
// 3.两个链表一起前进，比较获得第一个相等的节点
// 时间复杂度O(length1+length2) 空间复杂度O(0)

function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) {
    return null;
  }
  // 获取链表长度
  let length1 = getLength(pHead1);
  let length2 = getLength(pHead2);
  // 长链表先行
  let long, short, interval;
  if (length1 > length2) {
    long = pHead1;
    short = pHead2;
    interval = length1 - length2;
  } else {
    long = pHead2;
    short = pHead1;
    interval = length2 - length1;
  }
  while (interval--) {
    long = long.next;
  }
  // 找相同节点
  while (long) {
    if (long === short) {
      return long;
    }
    long = long.next;
    short = short.next;
  }
  return null;
}

function getLength(head) {
  let current = head;
  let result = 0;
  while (current) {
    result++;
    current = current.next;
  }
  return result;
}
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  const listNodeArr = [];
  let listPointer1 = head;
  let listPointer2 = head;

  for (let i = 0; i < n + 1; i++) {
    if (!listPointer2 && i === n) {
      return head.next;
    }
    listPointer2 = listPointer2.next;
  }

  while (listPointer2) {
    listPointer1 = listPointer1.next;
    listPointer2 = listPointer2.next;
  }

  listPointer1.next = listPointer1.next.next;

  return head;
};
// @lc code=end

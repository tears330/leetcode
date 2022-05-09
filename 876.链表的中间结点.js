/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
var middleNode = function (head) {
  let listPointer1 = head;
  let listPointer2 = head;

  while (listPointer2 && listPointer2.next) {
    listPointer1 = listPointer1.next;
    listPointer2 = listPointer2.next.next;
  }

  return listPointer1;
};
// @lc code=end

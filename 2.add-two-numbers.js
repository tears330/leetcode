/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.94%)
 * Total Accepted:    64K
 * Total Submissions: 206.7K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let l1Pointer = l1,
      l2Pointer = l2;

  while (true) {
    l1Pointer.val = l1Pointer.val + l2Pointer.val;

    if (l1Pointer.val > 9) {
      l1Pointer.val = l1Pointer.val - 10;
      l1Pointer.next = l1Pointer.next
                         ? { ...l1Pointer.next, val: l1Pointer.next.val + 1 }
                         : { val: 1, next: null };
    }

    if (l1Pointer.next === null && l2Pointer.next === null) {
      break;
    }

    if (l1Pointer.next !== null || l2Pointer.next !== null) {
      l1Pointer.next = l1Pointer.next || { val: 0, next: null };
      l2Pointer.next = l2Pointer.next || { val: 0, next: null };
    }

    l1Pointer = l1Pointer.next;
    l2Pointer = l2Pointer.next;
  }

  return l1;
};

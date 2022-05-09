/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1, list2) {
  let newListNode = new ListNode();
  let newListPointer = newListNode;
  let list1Pointer = list1;
  let list2Pointer = list2;

  while (list1Pointer && list2Pointer) {
    if (list1Pointer.val < list2Pointer.val) {
      newListPointer.next = list1Pointer;
      list1Pointer = list1Pointer.next;
    } else {
      newListPointer.next = list2Pointer;
      list2Pointer = list2Pointer.next;
    }

    newListPointer = newListPointer.next;
  }

  if (!list1Pointer) {
    newListPointer.next = list2Pointer;
  }

  if (!list2Pointer) {
    newListPointer.next = list1Pointer;
  }

  return newListNode.next;
}
// @lc code=end

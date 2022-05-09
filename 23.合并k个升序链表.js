/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class PriorityQueue {
  pq = [];

  compareFn = (a, b) => a > b;

  constructor(compareFn) {
    this.compareFn = compareFn;
  }

  isEmpty() {
    return this.pq.length === 0;
  }

  swim(index) {
    while (true) {
      const parent = Math.floor((index - 1) / 2);
      if (parent < 0 || this.compareFn(this.pq[index], this.pq[parent])) {
        break;
      } else {
        this.swap(index, parent);
        index = parent;
      }
    }
  }

  sink(index) {
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left >= this.pq.length) {
        break;
      }
      const child =
        right < this.pq.length && this.compareFn(this.pq[left], this.pq[right])
          ? right
          : left;

      if (this.compareFn(this.pq[child], this.pq[index])) {
        break;
      }
      this.swap(index, child);
      index = child;
    }
  }

  swap(i, j) {
    const temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
  }

  insert(element) {
    const length = this.pq.push(element);
    this.swim(length - 1);
  }

  deleteTop() {
    this.swap(0, this.pq.length - 1);
    this.pq.splice(this.pq.length - 1, 1);
    this.sink(0);
  }

  getTop() {
    return this.pq[0];
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  const newList = new ListNode();
  let newListPointer = newList;

  const pq = new PriorityQueue((a, b) => {
    return a.val - b.val > 0;
  });

  lists.forEach((list) => list && pq.insert(list));

  while (!pq.isEmpty()) {
    const listNode = pq.getTop();
    pq.deleteTop();
    if (listNode.next) {
      pq.insert(listNode.next);
    }

    newListPointer.next = listNode;
    newListPointer = newListPointer.next;
  }

  return newList.next;
};
// @lc code=end

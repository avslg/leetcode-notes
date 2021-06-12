/* eslint-disable no-restricted-syntax */
/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  function getArrayFromLL(nodeArg) {
    let node = nodeArg;
    const result = [];
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    return result;
  }
  const getLinkedListFromArray = (arrayNumbers) => {
    let listNode = null;

    for (const value of arrayNumbers) {
      listNode = {
        val: value,
        next: listNode,
      };
    }
    return listNode;
  };

  const firstArray = getArrayFromLL(l1);
  const secondArray = getArrayFromLL(l2);

  const sum = BigInt(firstArray.reverse().join('')) + BigInt(secondArray.reverse().join(''));
  const arrayFromSum = Array.from(String(sum), Number);

  return getLinkedListFromArray(arrayFromSum);
};
// @lc code=end

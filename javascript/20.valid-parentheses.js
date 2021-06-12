/* eslint-disable no-restricted-syntax */
/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/*
Given a string s containing just the characters
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

*/
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const dictionary = new Map();
dictionary.set('[', ']');
dictionary.set('{', '}');
dictionary.set('(', ')');

const isValid = function (s) {
  const temp = [];

  for (const letter of s) {
    if (dictionary.has(letter)) {
      temp.push(dictionary.get(letter));
    } else if (temp.pop() !== letter) return false;
  }
  return temp.length === 0;
};
console.log(isValid('()()()()())')); // false

/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;

  let reversedX = Array.from(String(x), (v) => Number(v));
  reversedX = Number(reversedX.reverse().join(''));
  return x === reversedX;
};
// @lc code=end
console.log(isPalindrome(121));

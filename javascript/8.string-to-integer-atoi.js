/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const result = s.match(/^ *([+-]{0,1}[0-9]+)/);
  const allowableMin = -1 * (2 ** 31);
  const allowableMax = 2 ** 31 - 1;
  if (result === null) return 0;

  if (result[1] < allowableMin) {
    return allowableMin;
  }
  if (result[1] > allowableMax) return allowableMax;

  return result[1];
};
// @lc code=end
console.log(myAtoi('+-12'));

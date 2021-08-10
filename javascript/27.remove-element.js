/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function removeElementFunction(nums, val) {
  for (let index = nums.length; index >= 0; index -= 1) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    }
  }

  return nums.length;
};
// @lc code=end

console.log(removeElement([3, 2, 2, 3], 3));

/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start

/** Given two strings s and t, return the minimum window in s which will contain all the characters in t.
 * If there is no such window in s that covers all characters in t, return the empty string "".
 * Note that If there is such a window, it is guaranteed that there will always be
 * only one unique minimum window in s.

 Example 1:

 Input: s = "ADOBECODEBANC", t = "ABC"
 Output: "BANC"

 Example 2:

 Input: s = "a", t = "a"
 Output: "a"

 Constraints:
 1 <= s.length, t.length <= 105
 s and t consist of English letters.

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s === t) return s;
  if (t.length > s.length) return '';
  if ((s === '') || (t === '')) return '';

  let leftBoard = 0;
  let rightBoard = 0;
  let count = 0;
  const target = new Map();
  const windowMap = new Map();
  let result = '';
  let answer = '';

  // fill our target map which counts every char in T-String
  t.split('').forEach((val) => {
    if (target.has(val)) {
      target.set(val, target.get(val) + 1);
    } else target.set(val, 1);
  });

  while (rightBoard < s.length) {
    const chr = s[rightBoard];
    const countChr = target.get(chr);

    if (countChr > 0) {
      windowMap.set(chr,
        windowMap.get(chr) === undefined ? 1 : windowMap.get(chr) + 1);
      if (target.get(chr) >= windowMap.get(chr)) count += 1;
    }

    while (leftBoard <= rightBoard && count === t.length) {
      answer = s.substring(leftBoard, rightBoard + 1);
      // let answer = s.split('').slice(leftBoard, rightBoard + 1);
      if (answer.length < result.length
        || result.length === 0) result = answer;

      const leftBoarderChr = s[leftBoard];
      if (target.get(leftBoarderChr) >= windowMap.get(leftBoarderChr)) {
        count -= 1;
      }
      windowMap.set(leftBoarderChr, windowMap.get(leftBoarderChr) - 1);
      leftBoard += 1;
    }

    rightBoard += 1;
  }
  return result;
};

// let str = 'ab';
// let pattern = 'a';
// let str = 'ADOBECODEBANC'
// let pattern = 'ABC';
// let str = 'a';
// let pattern = 'b';
// let str = 'abc';
// let pattern ='ab';
// let str = 'bbaa';
// let pattern ='aba';
const str = 'cabwefgewcwaefgcf';
const pattern = 'cae';

console.log(minWindow(str, pattern));

// @lc code=end

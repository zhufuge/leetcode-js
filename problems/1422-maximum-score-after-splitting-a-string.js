// 1422. Maximum Score After Splitting a String
// Easy   54%


// Given a string s of zeros and ones, return the maximum score after splitting
// the string into two non-empty substrings (i.e. left substring and right
// substring).
// The score after splitting a string is the number of zeros in the left
// substring plus the number of ones in the right substring.

// Example 1:
// Input: s = "011101"
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3
// Example 2:
// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2
// + 3 = 5
// Example 3:
// Input: s = "1111"
// Output: 3

// Constraints:
//     2 <= s.length <= 500
//     The string s consists of characters '0' and '1' only.


/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
  const l = s.length
  let left = s[0] == '0' ? 1 : 0, right = 0
  for (let i = 1; i < l; i++) if (s[i] == '1') right++
  let res = left + right
  for (let i = 1; i < l - 1; i++) {
    if (s[i] == '0') left++
    else right--
    res = Math.max(res, left + right)
  }
  return res
}

const batter = function(s) {
  let l = s.length, max = -l - 1, zeros = 0, ones = 0
  for (let i = 0; i < l; i++) {
    if (s[i] === '0') zeros++
    else ones++
    if (i < l - 1) max = Math.max(max, zeros - ones)
  }
  return max + ones
}

;[
  '011101', // 5
  '00111',  // 5
  '1111', // 3
  '10', // 0
].forEach((s) => {
  console.log(maxScore(s))
  console.log(batter(s))
})

// Solution:
// 先分为 s[0] 和 s[1,...]，并记录左边 0 的个数 left 和右边 1 的个数 right
// 从第二个字符开始遍历，过程中改变 left 和 right 的值
// 遍历到 0 则 left+1，否则 right-1
// 过程中记录 left+right 的最大值
// 遍历了两遍

// 遍历一遍的方法
// Max( zeroL + oneR )
// =Max( zeroL - oneL + oneL + oneR )
// =Max( zeroL - oneL ) + oneTotal

// Submission Result: Accepted
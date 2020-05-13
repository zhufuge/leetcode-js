// 830. Positions of Large Groups
// Easy   49%


// In a string S of lowercase letters, these letters form consecutive groups of
// the same character.
// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx",
// "z" and "yy".
// Call a group large if it has 3 or more characters.  We would like the starting
// and ending positions of every large group.
// The final answer should be in lexicographic order.

// Example 1:
// Input: "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the single large group with starting  3 and ending
// positions 6.
// Example 2:
// Input: "abc"
// Output: []
// Explanation: We have "a","b" and "c" but no large group.
// Example 3:
// Input: "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]

// Note:  1 <= S.length <= 1000


/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function(S) {
  const res = []
  for (let i = 1, j = 0, l = S.length; i <= l; i++) {
    if (S[j] !== S[i]) {
      if (i - j >= 3) res.push([j, i - 1])
      j = i
    }
  }
  return res
}

const universal = function(S) {
  const res = []
  for (let i = 0, j = 0; i < S.length; i = j) {
    while (j < S.length && S[i] === S[j]) j++
    if (j - i >= 3) res.push([i, j - 1])
  }
  return res
}

;[
  'abbxxxxzzy', // [[3,6]]
  'abc',        // []
  'abcdddeeeeaabbbcd', // [[3,5],[6,9],[12,14]]
  'aaabccc',
  'aaaa',
  'aa'
].forEach((S) => {
  console.log(largeGroupPositions(S))
  console.log(universal(S))
})

// Solution:
// 方法1
// i 遍历 数组，j 记录连续字符的头部，
// 当进入下一组连续字符时，计算 i 到 j 是否大于等于 3，是则记录，并设置 j，否则只设置 j 。
// 利用 JS 数组尾部之后的值为 undefined 来判断最后一组。

// 方法2 （更普遍）
// i 记录连续字符的头部，j 遍历数组直到下一个组的头部，
// 计算 i 到 j 是否大于等于 3，是则记录
// 设置 i = j

// Submission Result: Accepted
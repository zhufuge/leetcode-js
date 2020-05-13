// 821. Shortest Distance to a Character
// Easy   66%


// Given a string S and a character C, return an array of integers representing
// the shortest distance from the character C in the string.
// Example 1:
// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

// Note:
//     S string length is in [1, 10000].
//     C is a single character, and guaranteed to be in string S.
//     All letters in S and C are lowercase.


/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
  const n = S.length
  const res = Array(n)
  let d = 10000
  for (let i = 0; i < n; i++) {
    res[i] = d++
    if (S[i] === C) {
      for (let j = i; j >= 0 && res[j] > i - j; j--) res[j] = i - j
      d = 1
    }
  }
  return res
}
const better = function(S, C) {
  let n = S.length, res = Array(n), pos = -n
  for (let i = 0; i < n; i++) {
    if (S[i] === C) pos = i
    res[i] = i - pos
  }
  for (let i = pos - 1; i >= 0; i--) {
    if (S[i] === C) pos = i
    res[i] = Math.min(res[i], pos - i)
  }
  return res
}

;[
  ['loveleetcode', 'e'],
].forEach(([S, C]) => {
  console.log(shortestToChar(S, C))
  console.log(better(S, C))
})

// Solution:
// 1. 回溯
// 在未遇到 C 时，先填充最大值（占位，如 10000）
// 遇到 C 后，回溯填充之前的位置 j ，填入 i-j，直到遇到一个更小的值，
// 并将 d=1，并在之后依次填充 d，d+1，d+2...，直至遇到下一个 C。

// 2. 两个方向遍历
// 先从头开始遍历一遍，填入两个 C 之间的递减的值，
// 再从最后一个 C 向前遍历，将填入递增的值。

// Submission Result: Accepted
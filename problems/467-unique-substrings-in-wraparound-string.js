// 467. Unique Substrings in Wraparound String
// Medium   33%


// Consider the string s to be the infinite wraparound string of
// "abcdefghijklmnopqrstuvwxyz", so s will look like this:
// "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

// Now we have another string p. Your job is to find out how many unique
// non-empty substrings of p are present in s. In particular, your input is the
// string p and you need to output the number of different non-empty substrings
// of p in the string s.

// Note: p consists of only lowercase English letters and the size of p might be
// over 10000.

// Example 1:
// Input: "a"
// Output: 1
// Explanation: Only the substring "a" of string "a" is in the string s.

// Example 2:
// Input: "cac"
// Output: 2
// Explanation: There are two substrings "a", "c" of string "cac" in the string
// s.

// Example 3:
// Input: "zab"
// Output: 6
// Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of
// string "zab" in the string s.


/**
 * @param {string} p
 * @return {number}
 */
const findSubstringInWraproundString = function(p) {
  const slots = Array(26).fill(0)
  let count = 1
  for (let i = 0; i < p.length; i++) {
    const pi = p.codePointAt(i)
    const diff = pi - p.codePointAt(i - 1)
    if (diff === 1 || diff === -25) {
      count++
    } else {
      count = 1
    }
    slots[pi - 97] = Math.max(slots[pi - 97], count)
  }

  return slots.reduce((sum, v) => sum + v, 0)
}

;[
  'a',   // 1
  'cac', // 2
  'zab', // 6
  'yzaxyz', // 9
  'aszadfjlkjzabsdfghijabcde', // 36
  'yzabcdefghijklmnopqrstuvwxyz', // 403
].forEach((p) => {
  console.log(findSubstringInWraproundString(p))
})

// Solution:
// 方法 1
// 先找出连续的所有子字符串并计算其排列数，最后加起来得到答案。
// 问题所在：子字符串可能重复，子字符串的子字符串也可能重复。

// 方法 2
// 使用一个hash集合，存放所有的字符串，没有重复，集合的长度即是答案。
// 问题所在：时间复杂度大，空间复杂度也大。

// 方法 3
// 使用 dp 算法，使用一个长度为 26（26个字母）的数组。
// 数组保存以字母为首的子字符串的字符串长度的最大长度。
//  1. 分出多个子字符串；
//  2. 每个字符串中每个字符到末尾的长度，比较该字符对应的位置的数，若大于则替换；
//  3. 累加数组的每个数，得到答案。

// 如 'yzaxyz' 可分出两个子字符串 'yza' 和 'xyz'
// 填入数组为 y = 3, z = 2, a = 1, x = 3
// 答案为 3 + 2 + 1 + 3 = 9

// Submission Result: Accepted
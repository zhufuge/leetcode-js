// 1170. Compare Strings by Frequency of the Smallest Character
// Easy   58%


// Let's define a function f(s) over a non-empty string s, which calculates the
// frequency of the smallest character in s. For example, if s = "dcce" then f(s)
// = 2 because the smallest character is "c" and its frequency is 2.
// Now, given string arrays queries and words, return an integer array answer,
// where each answer[i] is the number of words such that f(queries[i]) < f(W),
// where W is a word in words.

// Example 1:
// Input: queries = ["cbd"], words = ["zaaaz"]
// Output: [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so
// f("cbd") < f("zaaaz").
// Example 2:
// Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// Output: [1,2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query
// both f("aaa") and f("aaaa") are both > f("cc").

// Constraints:
//     1 <= queries.length <= 2000
//     1 <= words.length <= 2000
//     1 <= queries[i].length, words[i].length <= 10
//     queries[i][j], words[i][j] are English lowercase letters.


/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = function(queries, words) {
  const f = (s) => s
    .split('')
    .sort((a, b) => a > b ? 1 : -1)
    .reduce((c, v, i, a) => c + (v === a[0] ? 1 : 0), 0)
  const FW = Array(11).fill(0)
  for (let w of words) {
    const fw = f(w)
    for (let i = 1; i < fw; i++) FW[i]++
  }
  return queries.map(q => FW[f(q)])
}

;[
  [['cbd'], ['zaaaz']],
  [['bbb','cc'],['a','aa','aaa','aaaa']],
].forEach(([queries, words]) => {
  console.log(numSmallerByFrequency(queries, words))
})

// Solution:
// f(s) 函数
// 1）将字符串拆分为字符数组
// 2）将每个字符按从小到大的顺序排序
// 3）统计与第一个字符相同的字符的个数

// 对于 words 中的每个字符串用 f(s) 计算出其频率数
// 用 FW 表记录频率数 i 在整个 words 的频率数组中排在第几，如：
// 对于频率数组 [1, 4, 2, 3, 2]
// FW = [0 4 2 1 0 0 0 ...]
//    i  0 1 2 3 4 5 6 ...

// 遍历 queries 数组，对于每个字符串，通过 f(s) 函数计算出其频率，再使用 FW 表获得 words 中
// 有几个字符串的频率大于该字符串。

// Submission Result: Accepted
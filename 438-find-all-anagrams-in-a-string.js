// 438. Find All Anagrams in a String
// Easy   33%


// Given a string s and a non-empty string p, find all the start indices of p's
// anagrams in s.

// Strings consists of lowercase English letters only and the length of both
// strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const m = s.length, n = p.length, hash = {}
  let count = 0
  for (let i = 0; i < n; i++) {
    if (!hash[p[i]]) {
      hash[p[i]] = 0
      count++
    }
    hash[p[i]]++
  }

  const result = []
  for (let i = 0; i < m; i++) {
    if (hash[s[i - n]] === 0) count++
    if (hash[s[i - n]] !== void 0) hash[s[i - n]]++
    if (hash[s[i - n]] === 0) count--

    if (hash[s[i]] === 0) count++
    if (hash[s[i]] !== void 0) hash[s[i]]--
    if (hash[s[i]] === 0) count--

    if (count === 0) result.push(i - n + 1)
  }
  return result
}

;[
  ['cbaebabacd', 'abc'],        // [0, 6]
  ['abab', 'ab'],               // [0, 1, 2]
  ['ababababab', 'abab'],       // [0, 1, 2, 3, 4, 5, 6]
  ['asdfabababab', 'abab'],     // [4, 5, 6, 7, 8]
].forEach(args => {
  console.log(findAnagrams(...args))
})

// Solution:
// 先用哈希表保存 p 中出现的字符和字符重复的次数，用变量保存字符的不同种类。

// 先想象我们拥有一个长度为 n(即p的长度) 的队列，队列从头穿过 s 字符串，像火车在
// 轨道上一样。
// 火车不断前行，被覆盖的字符串不断改变。先推出一个字符，在进入一个字符。
// 如果推出的字符在哈希中出现，则改变哈希表中该字符的值（加一）
// 如果进入的字符在哈希中出现，也改变哈希表中该字符的值（减一）

// 每次前进检查一遍哈希中的值，如果全为0，说明火车覆盖的字符串就是 p 的乱序。

// Submission Result: Accepted

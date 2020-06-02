// 1408. String Matching in an Array
// Easy   60%


// Given an array of string words. Return all strings in words which is substring
// of another word in any order.
// String words[i] is substring of words[j], if can be obtained removing some
// characters to left and/or right side of words[j].

// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of
// "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []

// Constraints:
//     1 <= words.length <= 100
//     1 <= words[i].length <= 30
//     words[i] contains only lowercase English letters.
//     It's guaranteed that words[i] will be unique.


/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
  let res = new Set()
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      let a = words[i], b = words[j]
      if (a.length > b.length) [a, b] = [b, a]
      if (b.indexOf(a) > -1) res.add(a)
    }
  }
  return [...res]
}

;[
  ['mass','as','hero','superhero'],
  ['leetcode', 'et', 'code'],
  ['blue', 'grenn', 'bu'],
  ["leetcoder","leetcode","od","hamlet","am"],
  ["jak","yjakdn","tj","yyjakdn"], //["jak","yjakdn"]
].forEach((words) => {
  console.log(stringMatching(words))
})

// Solution:
// 两两遍历，看长的字符串是否包含短的字符串。
// 使用 Set 集合去重

// Submission Result: Accepted
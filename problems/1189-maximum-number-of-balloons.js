// 1189. Maximum Number of Balloons
// Easy   61%


// Given a string text, you want to use the characters of text to form as many
// instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of
// instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1
// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:
// Input: text = "leetcode"
// Output: 0

// Constraints:
//     1 <= text.length <= 10^4
//     text consists of lower case English letters only.


/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
  const hash = { b: 0, a: 0, l: 0, o: 0, n: 0 }
  for (let c of text) if (hash[c] >= 0) hash[c]++
  return Math.min(hash['b'], hash['a'], Math.floor(hash['l'] / 2), Math.floor(hash['o'] / 2), hash['n'])
}

;[
  'nlaebolko',
  'loonbalxballpoon',
  'leetcode',
].forEach((text) => {
  console.log(maxNumberOfBalloons(text))
})

// Solution:
// 使用 hash 记录字符串中字母 'b', 'a', 'l', 'o', 'n' 的数量
// 取其数量的最小值即可（其中 'l', 'o' 需要除 2，因为这两个字母在 'balloon' 中出现了两次）

// Submission Result: Accepted
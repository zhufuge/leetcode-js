// 567. Permutation in String
// Medium   36%


// Given two strings s1 and s2, write a function to return true if s2 contains
// the permutation of s1. In other words, one of the first string's permutations
// is the substring of the second string.

// Example 1:
// Input:s1 = "ab" s2 = "eidbaooo"
// Output:True
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input:s1= "ab" s2 = "eidboaoo"
// Output: False

// Note:
// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
  const hash = {}
  for (let c of s1) {
    hash[c] = (hash[c] || 0) + 1
  }
  function check(i, length) {
    if (length === s1.length) return true
    const c = s2[i]
    if (hash[c] > 0) {
      hash[c]--
      if (check(i + 1, length + 1)) return true
      hash[c]++
    }
    return false
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (check(i, 0)) return true
  }
  return false
}

;[
  ['ab', 'eidbaooo'], // true
  ['ab', 'eidboaoo'], // false
  ['ab', 'eidbooab'], // true
  ['abab', 'adabaeboabbao'], // true
].forEach((args) => {
  console.log(checkInclusion(...args))
})

// Solution:
// 步骤如下：
// 1. 将 s1 保存在一个 hash 表中，key 为字母， value 为字母的数量，
// 2. 遍历 s2 的字母，若字母出现在 hash 中而且对应 value 大于 0 ，
//    则递归检查下一个字母，否则回溯（将 hash 中的 value 恢复）
// 3. 若检查的字母长度刚好为 s1 的长度，则返回 true。

// Submission Result: Accepted
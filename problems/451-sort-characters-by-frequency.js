// 451. Sort Characters By Frequency
// Medium   51%


// Given a string, sort it in decreasing order based on the frequency of
// characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid
// answer.

// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
  const hash = {}
  for (let c of s) hash[c] = (hash[c] || 0) + 1

  const bucket = []
  for (let key in hash) {
    const n = hash[key]
    bucket[n] = (bucket[n] || '') + key.repeat(n)
  }

  let result = ''
  for (let i = s.length; i > 0; i--) {
    if (bucket[i]) result += bucket[i]
  }

  return result
}

;[
  'tree',                       // 'eetr'
  'cccaaa',                     // 'cccaaa'
  'Aabb',                       // 'bbAa'
].forEach(s => {
  console.log(frequencySort(s))
})

// Solution:

// 方法一：
// 使用哈希表保存每个字符出现的次数，
// 将次数按降序排序后，构造新字符串。

// 方法二：
// 同样使用哈希，但不使用排序，而是使用桶（其实类似桶排序思想）
// 即分配 n+1 个位置，位置i中保存出现次数为i的字符组成的字符串。

// Submission Result: Accepted

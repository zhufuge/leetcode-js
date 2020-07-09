// 890. Find and Replace Pattern
// Medium   73%


// You have a list of words and a pattern, and you want to know which words in
// words matches the pattern.
// A word matches the pattern if there exists a permutation of letters p so that
// after replacing every letter x in the pattern with p(x), we get the desired
// word.
// (Recall that a permutation of letters is a bijection from letters to letters:
// every letter maps to another letter, and no two letters map to the same
// letter.)
// Return a list of the words in words that match the given pattern.
// You may return the answer in any order.

// Example 1:
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m,
// b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a
// permutation,
// since a and b map to the same letter.

// Note:
//     1 <= words.length <= 50
//     1 <= pattern.length = words[i].length <= 20


/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
  const res = [], n = pattern.length
  for (let word of words) {
    const hash = {}
    let isMatches = true
    for (let i = 0; i < n; i++) {
      if (
        (hash[pattern[i]] && hash[pattern[i]] !== word[i]) ||
        (hash['$' + word[i]] && hash['$' + word[i]] !== pattern[i])
      ) {
        isMatches = false
      } else {
        hash[pattern[i]] = word[i]
        hash['$' + word[i]] = pattern[i]
      }
    }
    if (isMatches) res.push(word)
  }
  return res
}

const better = function(words, pattern) {
  function f(s) {
    const map = new Map()
    let res = ''
    for (let c of s) {
      if (!map.has(c)) map.set(c, map.size + ',')
      res += map.get(c)
    }
    return res
  }

  const p = f(pattern)
  return words.filter((w) => p === f(w))
}

;[
  [['abc','deq','mee','aqq','dkd','ccc'], 'abb'],
].forEach(([words, pattern]) => {
  // console.log(findAndReplacePattern(words, pattern))
  console.log(better(words, pattern))
})

// Solution:
// 1. 使用 hashMap 来建立了一一对应的关系

// 2. 将字符串转换成序列字符串
// 如 'abb' -> '0,1,1,'
//    'abc' -> '0,1,2,'
//    'aqq' -> '0,1,1,'
//    'ccc' -> '0,0,0,'
// 若序列字符串相同，则匹配

// Submission Result: Accepted

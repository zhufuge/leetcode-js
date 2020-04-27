// 884. Uncommon Words from Two Sentences
// Easy   62%


// We are given two sentences A and B.  (A sentence is a string of space
// separated words.  Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and
// does not appear in the other sentence.
// Return a list of all uncommon words.
// You may return the list in any order.

// Example 1:
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

// Note:
//     0 <= A.length <= 200
//     0 <= B.length <= 200
//     A and B both contain only spaces and lowercase letters.


/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function(A, B) {
  const hash = {}
  for (let w of (A + ' ' + B).split(' ')) hash[w] = (hash[w] || 0) + 1
  const res = []
  for (let key in hash) {
    if (hash[key] === 1) res.push(key)
  }
  return res
}

;[
  ['this apple is sweet', 'this apple is sour'], // ['sweet', 'sour'],
  ['apple apple', 'banana'], // ['banana']
].forEach(([A, B]) => {
  console.log(uncommonFromSentences(A, B))
})

// Solution:
// 用 hashMap 来记录 A 和 B 每个单词出现的次数，
// 次数为 1 的添加到答案中。

// Submission Result: Accepted
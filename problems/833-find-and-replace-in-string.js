// 833. Find And Replace in String
// Medium   38%


// To some string S, we will perform some replacement operations that replace
// groups of letters with new ones (not necessarily the same size).

// Each replacement operation has 3 parameters: a starting index i, a source word
// x and a target word y.  The rule is that if x starts at position i in the
// original string S, then we will replace that occurrence of x with y.  If not,
// we do nothing.

// For example, if we have S = "abcd" and we have some replacement operation i =
// 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the
// original string S, we will replace it with "ffff".

// Using another example on S = "abcd", if we have both the replacement operation
// i = 0, x = "ab", y = "eee", as well as another replacement operation i = 2, x
// = "ec", y = "ffff", this second operation does nothing because in the original
// string S[2] = 'c', which doesn't match x[0] = 'e'.

// All these operations occur simultaneously.  It's guaranteed that there won't
// be any overlap in replacement: for example, S = "abc", indexes = [0, 1],
// sources = ["ab","bc"] is not a valid test case.

// Example 1:
// Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets =
// ["eee","ffff"]
// Output: "eeebffff"
// Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
// "cd" starts at index 2 in S, so it's replaced by "ffff".

// Example 2:
// Input: S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets =
// ["eee","ffff"]
// Output: "eeecd"
// Explanation: "ab" starts at index 0 in S, so it's replaced by "eee".
// "ec" doesn't starts at index 2 in the original S, so we do nothing.

// Notes:
//     0 <= indexes.length = sources.length = targets.length <= 100
//     0 < indexes[i] < S.length <= 1000
//     All characters in given inputs are lowercase letters.


/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
const findReplaceString = function(S, indexes, sources, targets) {
  const operations = []
  for (let i = 0; i < indexes.length; i++) {
    operations.push([indexes[i], sources[i], targets[i]])
  }
  operations.sort((a, b) => b[0] - a[0])
  for (let operation of operations) {
    const index = operation[0]
    const source = operation[1]
    const substr = S.substr([index], source.length)
    S = S.slice(0, index) + (substr === source ? operation[2] : substr) +
      S.slice(index + source.length)
  }
  return S
}

;[
  ['abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']], // 'eeebffff'
  ['abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff']], // 'eeecd'
  ['vmokgggqzp', [3,5,1], ['kg','ggq','mo'], ['s','so','bfr']], // 'vbfrssozp'
].forEach((args) => {
  console.log(findReplaceString(...args))
})

// Solution:

// 方法 1：
// 使用一个数组字符串保存不参与替换的和参与替换的子字符串。
// 按 indexes 从头到尾的顺序，比较要替换的子字符串，若匹配，则将target放到数组，
// 否则放原子字符串。
// 最后将字符串拼合得到答案。
// 缺陷：操作的下标没有排序，会导致不参与替换的子字符串错乱。
// 解决方法：先排序操作。

// 方法 2：
// 排序操作，从右到左操作。在原字符串上操作。

// Submission Result: Accepted
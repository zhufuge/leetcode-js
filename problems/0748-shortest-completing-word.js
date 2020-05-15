// 748. Shortest Completing Word
// Easy   56%



// Find the minimum length word from a given dictionary words, which has all the
// letters from the string licensePlate.  Such a word is said to complete the
// given string licensePlate
// Here, for letters we ignore case.  For example, "P" on the licensePlate still
// matches "p" on the word.
// It is guaranteed an answer exists.  If there are multiple answers, return the
// one that occurs first in the array.
// The license plate might have the same letter occurring multiple times.  For
// example, given a licensePlate of "PP", the word "pair" does not complete the
// licensePlate, but the word "supper" does.

// Example 1:
// Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe",
// "stepple"]
// Output: "steps"
// Explanation: The smallest length word that contains the letters "S", "P", "S",
// and "T".
// Note that the answer is not "step", because the letter "s" must occur in the
// word twice.
// Also note that we ignored case for the purposes of comparing whether a letter
// exists in the word.

// Example 2:
// Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
// Output: "pest"
// Explanation: There are 3 smallest length words that contains the letters "s".
// We return the one that occurred first.

// Note:
// licensePlate will be a string with length in range [1, 7].
// licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
// words will have a length in the range [10, 1000].
// Every words[i] will consist of lowercase letters, and have length in range [1,
// 15].


/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  const hash = {}
  for (let c of licensePlate) {
    if (('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z')) {
      const l = c.toLowerCase()
      hash[l] = (hash[l] || 0) + 1
    }
  }
  let res = '0'.repeat(16), wHash, isIncluded
  for (let word of words) {
    wHash = {}, isIncluded = true
    for (let c of word) wHash[c] = (wHash[c] || 0) + 1
    for (let key in hash) {
      if (hash[key] > (wHash[key] || 0)) {
        isIncluded = false
        break
      }
    }
    if (isIncluded && word.length < res.length) res = word
  }
  return res
}

;[
  // ['1s3 PSt', ['step','steps','stripe','stepple']],
  // ['1s3 456', ["looks", "pest", "stew", "show"]],
  [
    "Ah71752",
    ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"],
  ], // 'husband'
].forEach(([licensePlate, words]) => {
  console.log(shortestCompletingWord(licensePlate, words))
})

// Solution:
// 先数字符串中每个字母（都转换成小写）的个数，记录在 hash 中，
// 遍历词组，数词中各个字母的个数，并与 hash 中的字符比较，必须每个字符的个数都要大于或等于
// hash 中的，若都大于，则与 res 比较长度，取短的。

// Submission Result: Accepted
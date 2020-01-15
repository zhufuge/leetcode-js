// 557. Reverse Words in a String III
// Easy   59%


// Given a string, you need to reverse the order of characters in each word
// within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Note:
// In the string, each word is separated by single space and there will not be
// any extra space in the string.


/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

;[
  "Let's take LeetCode contest", // "s'teL ekat edoCteeL tsetnoc"
].forEach(s => {
  console.log(reverseWords(s))
})

// Solution:
// 全靠 JavaScript 原生函数。

// Submission Result: Accepted

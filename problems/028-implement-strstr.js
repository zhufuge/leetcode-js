// 28. Implement strStr()
// Easy   28%

// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if
// needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) return i
      if (i + j === haystack.length) return -1
      if (needle[j] !== haystack[i + j]) break
    }
  }
}

;[
  ['hello', 'll'],              // 2
  ['aaaaa', 'bba'],             // -1
].forEach(args => {
  console.log(strStr(...args))
})

// Solution:
// i遍历haystack的每个字符
// j用于比较haystack子字符串与needle是否相同
// 当j等于needle的长度时，正好完成匹配
// 当i+j等于haystack的长度时，说明i之后的长度不足以匹配
// 当子字符串不同时，直接跳过该头字符，换下一个。

// Submission Result: Accepted

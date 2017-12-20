// 680. Valid Palindrome II
// Easy 31% locked:false


// Given a non-empty string s, you may delete at most one character. Judge
// whether you can make it a palindrome.

// Example 1:

// Input: "aba"
// Output: True

// Example 2:

// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// Note:

// The string will only contain lowercase characters a-z.
// The maximum length of the string is 50000.


/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
  function match(i, j) {
    while (i < j && s[i] === s[j]) { i++; j-- }
    return [i, j]
  }

  let [i, j] = match(0, s.length - 1)
  if (i >= j) return true

  let [a, b] = match(i + 1, j)
  if (a >= b) return true

  ;[a, b] = match(i, j - 1)
  if (a >= b) return true

  return false
}

console.log(validPalindrome('abababa'))
console.log(validPalindrome('abac'))
console.log(validPalindrome('ababacba'))
console.log(validPalindrome('abacbacba'))

// Solution:
// 因为最多只能删除一个字符，所以字符串基本上是对称的。
// 因此，比较首尾对应字符，分别用 low 和 high 表示要比较的字符的下标。

// 第一次遇到不同时，有下面4种情况：
// 1. s[low+1] === s[high]，s[low] === s[high-1]，
//    先 low+=1，继续匹配，不行再回溯，将 high-=1。
// 2. s[low+1] === s[high]，s[low] !== s[high-1]，
//    将 low+=1，继续判断，直到遇见第二个不同返回 false，否则返回 true。
// 3. s[low+1] !== s[high]，s[low] === s[high-1]，
//    将 high-=1，继续判断，直到遇见第二个不同返回 false，否则返回 true。
// 4. s[low+1] !== s[high]，s[low] !== s[high-1]，
//    则返回 false， 因为则起码要删去2个字符
// 其中要为 情况1 添加额外变量，记录回溯信息。

// 改进，更加直接，直观。
// 同样首尾匹配，用函数来完成，从外到里匹配。
// 如果字符串本来就是回文，则返回 true。
// 若第一次遇到不同，记录 i 和 j，随后有 3 种情况：
// 1. s[i] 多余，左边从 i+1 开始，若再有不匹配，看下一种情况，否则返回 true。
// 2. s[j] 多余，右边从 j-1 开始，若再有不匹配，看下一种情况，否则返回 true。
// 3. s[i] 和 s[j] 都多余，直接返回 false

// Submission Result: Accepted

// 859. Buddy Strings
// Easy   28%


// Given two strings A and B of lowercase letters, return true if and only if we
// can swap two letters in A so that the result equals B.

// Example 1:
// Input: A = "ab", B = "ba"
// Output: true
// Example 2:
// Input: A = "ab", B = "ab"
// Output: false
// Example 3:
// Input: A = "aa", B = "aa"
// Output: true
// Example 4:
// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:
// Input: A = "", B = "aa"
// Output: false

// Note:
//     0 <= A.length <= 20000
//     0 <= B.length <= 20000
//     A and B consist only of lowercase letters.


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = function(A, B) {
  if (A.length !== B.length) return false
  let a = '', b = '', count = {}, swap = 0
  for (let i = 0; i < A.length; i++) {
    count[A[i]] = (count[A[i]] || 0) + 1
    if (A[i] !== B[i]) {
      if (swap === 0) {
        a = A[i]
        b = B[i]
        swap++
      } else if (swap === 1) {
        if (a !== B[i] || b !== A[i]) return false
        swap++
      } else return false
    }
  }
  for (let key in count) if (count[key] > 1) return true
  return swap === 2
}

const better = function(A, B) {
  if (A.length !== B.length) return false
  if (A === B && (new Set(A)).size < A.length) return true
  const dif = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) dif.push(i)
  }
  return dif.length === 2 && A[dif[0]] === B[dif[1]] && A[dif[1]] === B[dif[0]]
}

;[
  ['ab', 'ba'], // true
  ['ab', 'ab'], // false
  ['aa', 'aa'], // true
  ['aaaaaaabc', 'aaaaaaacb'], // true
  ['', 'aa'], // false
  ['abab', 'abab'], // true
  ['acbb', 'abcc'], // false
].forEach(([A, B]) => {
  console.log(buddyStrings(A, B))
  // console.log(better(A, B))
})

// Solution:
// 记录字符 `a` 和 `b`，记录交换的次数 `swap`，并记录每个字符出现的次数。
// a 和 b 用于记录交换的字符
// swap 不能大于2，否则返回 false
// 记录字符次数，是为了在两个字符串相同时，看看有没有可交换的两个相同的字符。

// 更好的方法
// 当字符串相同时，用 Set 来判断，是否有重复字符
// 遍历字符串时，使用数组记录要交换的字符的下标
// 最后判断数组的长度是否等于2，并判断交换后是否相同。

// Submission Result: Accepted
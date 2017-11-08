// 290. Word Pattern
// Easy   33%


// Given a pattern and a string str, find if str follows the same pattern.

//  Here follow means a full match, such that there is a bijection between a
// letter in pattern and a non-empty word in str.

// Examples:

// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.

// Notes:
// You may assume pattern contains only lowercase letters, and str contains
// lowercase letters separated by a single space.

// Credits:Special thanks to @minglotus6 for adding this problem and creating all
// test cases.


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  str = str.split(' ')
  const n = pattern.length, m = str.length
  if (n !== m) return false

  const hash = {}
  for (let i = 0; i < n; i++) {
    if (!hash[pattern[i]]) {
      if (hash['A' + str[i]]) return false
      hash[pattern[i]] = str[i]
      hash['A' + str[i]] = [pattern[i]]
    }
    if (hash[pattern[i]] !== str[i]) return false
  }
  return true
}

;[
  ['abba', 'dog cat cat dog'],  // true
  ['abba', 'dog cat cat fish'], // false
  ['aaaa', 'dog cat cat dog'],  // false
  ['abba', 'dog dog dog dog'],  // false
  ['abc', 'b c a'],             // true
].forEach(args => {
  console.log(wordPattern(...args))
})


// Solution:
// 先将 str 字符串变为字符串数组。
// 在遍历 str 和 pattern 时，一边建立双射连接一边匹配。
// 为了避免 pattern 的某个字符与 str 中的某个字符 相同，
// 因此在建立 str 的映射时，让其加上一个不会出现的字符，以便区分。

// Submission Result: Accepted

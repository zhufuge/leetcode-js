// 3. Longest Substring Without Repeating Characters
// Medium 24% locked:false

// Given a string, find the length of the longest substring without repeating
// characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the
// answer must be a substring, "pwke" is a subsequence and not a substring.

// Given "dvdf", the answer is "vdf", which the length is 3.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  console.log(s)
  let longest = '', thatLen = ''
  for (let i of s) {
    const index = thatLen.indexOf(i)
    if (index >= 0) {
      if (thatLen.length > longest.length) longest = thatLen
      thatLen = thatLen.substr(index + 1)
    }

    thatLen += i
  }
  longest = longest.length > thatLen.length ? longest : thatLen
  return longest.length
}

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('c'))
// console.log(lengthOfLongestSubstring('dvdf'))

function bestAnswer(s) {
  const n = s.length, map = {}
  let ans = 0
  for (let j = 0, i = 0; j < n; j++) {
    if (map[s[j]]) i = Math.max(map[s[j]], i)
    ans = Math.max(ans, j - i + 1)
    map[s[j]] = j + 1
  }
  return ans;
}

console.log(bestAnswer('abcabcbb'))
console.log(bestAnswer('bbbbb'))
console.log(bestAnswer('pwwkew'))
console.log(bestAnswer('c'))
console.log(bestAnswer('dvdf'))

// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if
// needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (needle === '' || needle === haystack) return 0

  const n = haystack.length, m = needle.length
  for (let i = 0; i < n && n - i >= m; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0
      while (haystack[i + j] === needle[j] && j < m) j++
      if (j === m) return i
    }
  }

  return -1
}

console.log(strStr('aaa', 'a'))

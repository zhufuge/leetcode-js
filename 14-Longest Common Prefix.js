// 14. Longest Common Prefix
// Easy 31% locked:false

//Write a function to find the longest common prefix string amongst an array of
//strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const n = strs.length
  if (n < 1) return '' 

  let result = ''
  for (let i = 0; ; i++) {
    const t = strs[0][i]
    if (t === void 0) return result
    for (let j = 1; j < n; j++) {
      if (strs[j][i] !== t) return result
    }
    result += t
  }
}

console.log(longestCommonPrefix([]))

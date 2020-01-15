// 14. Longest Common Prefix
// Easy   31%

//Write a function to find the longest common prefix string amongst an array of
//strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs == null || strs.length === 0) return ''
  const n = strs.length, m = strs[0].length
  for (let i = 0; i < m; i++) {
    const c = strs[0][i]
    for (let j = 1; j < n; j++) {
      if (strs[j][i] !== c) return strs[0].substring(0, i)
    }
  }
  return strs[0]
}

;[
  [],                           // ''
  [''],                         // ''
  ['abc'],                      // 'abc'
  ['a', 'b'],                   // ''
  ['123', '123456', '1232'],    // '123'
].forEach(strs => {
  console.log(longestCommonPrefix(strs))
})

// Solution:
// 垂直扫描，从头开始比较全部字符串中相同下标的字符是否相同
// 若有一个不同，则返回0到该下标之间（包括0不包括该下标）的子字符串
// 全部相同则检查下一个下标。

// Submission Result: Accepted

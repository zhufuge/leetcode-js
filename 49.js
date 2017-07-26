// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note: All inputs will be in lower-case.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  if (strs === null || strs.length === 0) return []

  const map = {}
  for (let s of strs) {
    const ca = s.split('')
    ca.sort((a, b) => a > b)
    const keyStr = ca.join('')
    if (map[keyStr] === void 0) map[keyStr] = []
    map[keyStr].push(s)
  }

  const res = []
  for (let k in map) {
    res.push(map[k])
  }
  return res
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'boo','bob']))

const ifNoDep = function(strs) {
  const n = strs.length, res = []
  if (n <= 0) return []

  const hash = {}
  for (let str of strs) for (let c of str) hash[c] = true

  res.push(strs)
  for (let c in hash) {
    for (let i = res.length; i > 0; i--) {
      const p = [], q = [], group = res.shift()
      for (let i = 0, m = group.length; i < m; i++) {
        if (group[i].includes(c)) p.push(group[i])
        else q.push(group[i])
      }
      if (p.length !== 0) res.push(p)
      if (q.length !== 0) res.push(q)
    }
  }

  return res
}

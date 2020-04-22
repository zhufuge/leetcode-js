// 893. Groups of Special-Equivalent Strings
// Easy   65%


// You are given an array A of strings.
// A move onto S consists of swapping any two even indexed characters of S, or
// any two odd indexed characters of S.
// Two strings S and T are special-equivalent if after any number of moves onto
// S, S == T.
// For example, S = "zzxy" and T = "xyzz" are special-equivalent because we may
// make the moves "zzxy" -> "xzzy" -> "xyzz" that swap S[0] and S[2], then S[1]
// and S[3].
// Now, a group of special-equivalent strings from A is a non-empty subset of A
// such that:
//     Every pair of strings in the group are special equivalent, and;
//     The group is the largest size possible (ie., there isn't a string S not in
// the group such that S is special equivalent to every string in the group)
// Return the number of groups of special-equivalent strings from A.

// Example 1:
// Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
// Output: 3
// Explanation:
// One group is ["abcd", "cdab", "cbad"], since they are all pairwise special
// equivalent, and none of the other strings are all pairwise special equivalent
// to these.
// The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in
// particular, "zzxy" is not special equivalent to "zzyx".
// Example 2:
// Input: ["abc","acb","bac","bca","cab","cba"]
// Output: 3

// Note:
//     1 <= A.length <= 1000
//     1 <= A[i].length <= 20
//     All A[i] have the same length.
//     All A[i] consist of only lowercase letters.


/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = function(A) {
  const l = A.length
  const used = Array(l).fill(false)
  function resolve(S) {
    const even = {}
    const odd = {}
    for (let i = 0, l = S.length; i < l; i++) {
      if (i % 2) even[S[i]] = (even[S[i]] || 0) + 1
      else odd[S[i]] = (odd[S[i]] || 0) + 1
    }
    return { even, odd }
  }
  function SpEq(a, b) {
    for (let key in a.even) {
      if (a.even[key] !== b.even[key]) return false
    }
    for (let key in a.odd) {
      if (a.odd[key] !== b.odd[key]) return false
    }
    return true
  }
  let res = 0
  for (let i = 0; i < l; i++) {
    if (used[i]) continue
    used[i] = true
    res++
    const a = resolve(A[i])
    for (let j = i + 1; j < l; j++) {
      if (used[j]) continue
      if (SpEq(a, resolve(A[j]))) used[j] = true
    }
  }
  return res
}

const better = function(A) {
  const set = new Set()
  for (let s of A) {
    const even = Array(26).fill(0)
    const odd = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
      if (i % 2) even[s.charCodeAt(i) - 97]++
      else odd[s.charCodeAt(i) - 97]++
    }
    set.add(String(even) + String(odd))
  }
  return set.size
}

;[
  ['abcd','cdab','cbad','xyzz','zzxy','zzyx'], // 3
  ["abc","acb","bac","bca","cab","cba"], // 3
  ["a","b","c","a","c","c"], // 3
].forEach((A) => {
  console.log(numSpecialEquivGroups(A))
})

// Solution:
// 使用标记数组，标记已经在分组内的字符串。
// 使用一个解析函数，解析字符串中的奇数位字符和偶数位字符。
// 使用一个比较函数，比较两个字符串解析后的数据结构。

// 更好的方法：
// 使用 Set 类。
// 对于每个字符串，使用两个数组分别记录奇、偶位的每个字符的个数，并按字母表排列，
// 最后将两个数组转成字符串，合并后添加到 set 中。
// 这样特殊相等的字符串会转成同一个字符串，set 将其合并。

// Submission Result: Accepted
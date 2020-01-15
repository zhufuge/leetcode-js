// 686. Repeated String Match
// Easy 31%


// Given two strings A and B, find the minimum number of times A has to be
// repeated such that B is a substring of it. If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".
// Return 3, because by repeating A three times (“abcdabcdabcd”), B is a
// substring of it; and B is not a substring of A repeated two times
// ("abcdabcd").

// Note:
// The length of A and B will be between 1 and 10000.

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function(A, B) {
  const alen = A.length, blen = B.length
  if (alen >= blen && A.includes(B)) return 1
  let trylen = Math.min(alen, blen), ai = -1
  while (ai < 0) {
    ai = A.indexOf(B.slice(0, trylen--), alen - trylen - 1)
    if (ai < 0 && trylen === 0) return -1
  }

  let bi = 0, result = 1
  while (bi < blen) {
    if (B[bi++] !== A[ai++]) return -1
    if (ai === alen && bi < blen) {
      ai = 0
      result++
    }
  }
  return result
}

;[
  ['abcd', 'cdabcdab'],
  ['a', 'aa'],
  ['aa', 'a'],
  ['bb', 'bbbbbbb'],
  ['abababaaba', 'aabaaba'],
  ['abcd', 'abcdb'],
  ['baa', 'abaab'],
].forEach(args => {
  console.log(repeatedStringMatch(...args))
})

// Solution:
// * 方法1
// 1. 初始化 result = 1
// 2. 先找出 B[0] 对应 A 中的哪一个字符，如位置 ai。
// 3. B 从 0 开始，A 从 ai 开始（首尾相接），一个一个比较。
// 4. 每次 ai 变为 0，表示已经重复了一遍，result++。
// 5. 如果对应字符不同，就返回 -1。
// 注意：result的初始值的设置，与边界问题。

// 无需重复构建字符串，只要改变下标即可，将 A 想象为首位相接的字符串数组。

// 时间复杂度：O(m + n), 常数级
// 存在问题：如例5，没有找到合适的 B[0] 对应的 A[ai]
// 解决：尝试从 B 的最长字符开始匹配，依次缩短。

// * 方法2
// 替换方法1中的第二步，不是字符匹配，而是字符串匹配（B的前段字符串，B[0:i], i < blen)
// 时间复杂度：O((m * min(m, n) * n), 立方级
// 存在问题：时间复杂度太大。

// * 方法3
// 改进 方法2，只遍历最长的匹配。
// 时间复杂度：O(m * min(m, n)), 平方级

// 只遍历最长的匹配，是否可以完成任务？
// 假设 A = a_1 + a_2 + a_3, B = b_1 + b_2 + b_3
// 如果 B 是 A 重复字符串的子字符串，那么 A 和 B 必须符合以下情况：
// 1. B = a_2 （B 直接是 A 的子字符串)，此时 B 为最长匹配。
// 2. b_1 = a_3, b_2 = A*, b_3 = a_1 (A 需要重复，形成 ... + a_3 + A* + a_1 + ...)，
//    此时 b_1 为最长匹配。(A* 表示 A重复0或多遍)

// b_1 = a_2 = a_3 会出现什么情况呢？
// 如果我们只匹配 b_1 = a_3，即只匹配 A 的最后与 B 的最前的相同长度的字符。
// 可以想象看两张纸条，一张的前端与另一张的后端重叠。
// 那么 无论 a_2 等于什么都无所谓。

// Submission Result: Accepted


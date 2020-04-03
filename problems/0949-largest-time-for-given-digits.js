// 949. Largest Time for Given Digits
// Easy   36%


// Given an array of 4 digits, return the largest 24 hour time that can be made.
// The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from
// 00:00, a time is larger if more time has elapsed since midnight.
// Return the answer as a string of length 5.  If no valid time can be made,
// return an empty string.

// Example 1:
// Input: [1,2,3,4]
// Output: "23:41"
// Example 2:
// Input: [5,5,5,5]
// Output: ""

// Note:
//     A.length == 4
//     0 <= A[i] <= 9


/**
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = function(A) {
  const check = (t) => !(t[0] > 2 || (t[0] === 2 && t[1] > 3) || t[2] > 5)
  const compare = (a, b) => Number.parseInt(a.join('')) - Number.parseInt(b.join(''))
  let result = []
  function dfs(start) {
    if (start > 3) {
      if (check(A)) {
        if (result.length === 0) result = [...A]
        else if (compare(A, result) > 0) result = [...A]
      }
    } else {
      for (let i = start; i < 4; i++) {
        const temp = A[i]
        A[i] = A[start]
        A[start] = temp
        dfs(start + 1)
        A[start] = A[i]
        A[i] = temp
      }
    }
  }
  dfs(0)
  return result.length ? '' + result[0] + result[1] + ':' + result[2] + result[3] : ''
}

;[
  [1,2,3,4], // '23:41'
  [5,5,5,5], // ''
  [2,3,5,9], // '23:59'
  [0,0,3,1], // '13:00'
  [0,4,0,0], // '04:00'
  [4,2,4,4], // ''
  [2,0,6,6], // '06:26'
].forEach((A) => {
  console.log(largestTimeFromDigits(A))
})

// Solution:
// 基本思路
// 1. 用递归生成全排列
// 2. 将合法的数组保存
// 3. 将合法数组排序
// 4. 返回最大的

// 优化
// 保存一个最大的数值与后面的比较即可，无需保存全部合法数组

// 旧的想法
// 前三个数有限制
// 第一个 0-2
// 当第一个为 0 或 1 时，第二个随意
// 当第一个为 2 时，第二个为 0-3
// 第三个 0-5
// 第四个随意
// 所以，从第一个选起，根据第一个选第二个，再选第三个，最后剩下的为第四个
// 每选完一个，就判断一次

// 因为在选数的时候，第一个优先选 2，导致后面的数无法组成时间。
// 如 [2,0,6,6]
const idea1 = function() {
  function set(start, max) {
    for (let val = max; val >= 0; val--) {
      let i = -1
      for (let j = start; j < 4 && i === -1; j++) if (A[j] === val) i = j
      if (i > -1) {
        A[i] = A[start]
        A[start] = val
        break
      }
    }
  }

  set(0, 2)
  if (A[0] > 2) return ''
  if (A[0] === 2) {
    set(1, 3)
    if (A[1] > 3) return ''
  } else {
    set(1, 9)
  }
  set(2, 5)
  if (A[2] > 5) return ''
  return '' + A[0] + A[1] + ':' + A[2] + A[3]
}

// Submission Result: Accepted
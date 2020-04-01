// 970. Powerful Integers
// Easy   40%


// Given two positive integers x and y, an integer is powerful if it is equal to
// x^i + y^j for some integers i >= 0 and j >= 0.
// Return a list of all powerful integers that have value less than or equal to
// bound.
// You may return the answer in any order.  In your answer, each value should
// occur at most once.

// Example 1:
// Input: x = 2, y = 3, bound = 10
// Output: [2,3,4,5,7,9,10]
// Explanation:
// 2 = 2^0 + 3^0
// 3 = 2^1 + 3^0
// 4 = 2^0 + 3^1
// 5 = 2^1 + 3^1
// 7 = 2^2 + 3^1
// 9 = 2^3 + 3^0
// 10 = 2^0 + 3^2
// Example 2:
// Input: x = 3, y = 5, bound = 15
// Output: [2,4,6,8,10,14]

// Note:
//     1 <= x <= 100
//     1 <= y <= 100
//     0 <= bound <= 10^6


/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
const powerfulIntegers = function(x, y, bound) {
  const set = new Set()
  for (let a = 1; a < bound; a *= x) {
    for (let b = 1; a + b < bound; b *= y) {
      set.add(a + b)
      if (y === 1) break
    }
    if (x === 1) break
  }
  return [...set]
}

;[
  [2, 3, 10], // [2,3,4,5,7,9,10]
  [3, 5, 15], // [2,4,6,8,10,14]
  [1, 1, 0],  // []
  [1, 1, 1000000], // [2]
  [1, 2, 1000000], // [2, 3, 5, 9, ...more 16 items]
].forEach(([x, y, bound]) => {
  console.log(powerfulIntegers(x, y, bound))
})

// Solution:
// 想法1
// 根据相加的两个数的不同值，可以想象出一个杨辉（帕斯卡）三角
// 如
//             1+1=2
//         /          \
//      2+1=3        1+3=4
//     /     \     %      \
//   4+1=5    2+3=5     1+9=10
//  /     \  %     \   %     \
// 8+1=9  4+3=7    2+9=11     82
// 65   11     13       83
// 可以遍历 a+b 小于 bound 的节点，使用归并排序的思想得到两个子节点返回的数组，
// 并将当前节点的 a+b 添加到合并后的数组的头部，因为其值必小于左右的最小值。
// 为了避免重复遍历，所以只有根节点和左节点才遍历左右子节点，右节点只遍历右子节点。
// 注意相同的值的合并。
// 当 bound 很大时，递归的层数就很大，如 x=1,y=1,bound=1000000 时， 就爆栈了。
// x=1 || y=1 的情况单独解决即可

const idea1 = function() {
  if (bound < 2) return []
  if (x === 1 && y === 1) return [2]
  if (x === 1 || y === 1) {
    let a = x = Math.max(x, y)
    let res = [2]
    while (a <= bound) {
      res.push(a + 1)
      a *= x
    }
    return res
  }
  function dfs(a, b, isSplit) {
    if (a + b > bound) return []
    let left = []
    if (isSplit) left = dfs(a * x, b, true)
    const right = dfs(a, b * y, false)
    const res = [a + b]
    for (let i = 0, j = 0; i < left.length || j < right.length;) {
      if (i == left.length || left[i] > right[j]) res.push(right[j++])
      else if (j == right.length || left[i] < right[j]) res.push(left[i++])
      else {
        res.push(left[i++])
        j++
      }
    }
    return res
  }
  return dfs(1, 1, true)
}
// 回头发现，结果并不需要排序，即只需要排除重复数据即可

// 若不需要排序
// 1. 使用 hash 来确定数使用存在
// 2. es6 中的 set

// Submission Result: Accepted

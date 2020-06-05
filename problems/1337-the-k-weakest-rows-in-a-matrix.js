// 1337. The K Weakest Rows in a Matrix
// Easy   68%


// Given a m * n matrix mat of ones (representing soldiers) and zeros
// (representing civilians), return the indexes of the k weakest rows in the
// matrix ordered from the weakest to the strongest.
// A row i is weaker than row j, if the number of soldiers in row i is less than
// the number of soldiers in row j, or they have the same number of soldiers but
// i is less than j. Soldiers are always stand in the frontier of a row, that is,
// always ones may appear first and then zeros.

// Example 1:
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers for each row is:
// row 0 -> 2
// row 1 -> 4
// row 2 -> 1
// row 3 -> 2
// row 4 -> 5
// Rows ordered from the weakest to the strongest are [2,0,3,1,4]
// Example 2:
// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers for each row is:
// row 0 -> 1
// row 1 -> 4
// row 2 -> 1
// row 3 -> 1
// Rows ordered from the weakest to the strongest are [0,2,3,1]

// Constraints:
//     m == mat.length
//     n == mat[i].length
//     2 <= n, m <= 100
//     1 <= k <= m
//     matrix[i][j] is either 0 or 1.


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function(mat, k) {
  const m = mat.length, n = mat[0].length
  const res = []
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (mat[i][j] === 0 && !res.includes(i)) res.push(i)
      if (res.length === k) return res
    }
  }
  for (let i = 0; i < m && res.length < k; i++) if (!res.includes(i)) res.push(i)
  return res
}

;[
  [[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3],
  [[[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]], 2],
  [[[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]], 1],
].forEach(([mat, k]) => {
  console.log(kWeakestRows(mat, k))
})

// Solution:
// 1. 统计每行1的个数，再排序。

// 2. 一列列遍历，发现 0 时，将该行添加到数组中，（重复的不添加）。

// Submission Result: Accepted
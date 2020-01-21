// 1128. Number of Equivalent Domino Pairs
// Easy   47%


// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] =
// [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is,
// one domino can be rotated to be equal to another domino.
// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and
// dominoes[i] is equivalent to dominoes[j].

// Example 1:
// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1

// Constraints:
//     1 <= dominoes.length <= 40000
//     1 <= dominoes[i][j] <= 9


/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function(dominoes) {
  let n = 0
  const hash = {}
  for (let dominoe of dominoes) {
    const small = Math.min(dominoe[0], dominoe[1])
    const large = Math.max(dominoe[0], dominoe[1])
    const key = small + '$' + large
    n += hash[key] || 0
    hash[key] = (hash[key] || 0) + 1
  }
  return n
}

;[
  [[1,2],[2,1],[3,4],[5,6]],            // 1
  [[1,2],[2,1],[3,4],[5,6],[2,1],[1,2]],// 6
].forEach((dominoes) => {
  console.log(numEquivDominoPairs(dominoes))
})

// Solution:
// 方法一：每个对都和其后的全部对比较一次，在过程中计数即可。
// O(n^2) 的时间复杂度

// 方法二：利用 hash 表来记录相同项，
// 将每个对的数排序，比如小的在前大的在后，用特殊符号分隔，确保生成的字符串相同
// O(n) 的时间复杂度，O(n) 的空间复杂度

// Submission Result: Accepted
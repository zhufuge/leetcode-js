// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const res = []
  const iter = (p, i) => {
    if (p.length === k) res.push([...p])
    else {
      for (; i <= n; i++) {
        p.push(i)
        iter(p, i + 1)
        p.pop()
      }
    }
  }
  iter([], 1)
  return res
}

console.log(combine(2, 1))

// 447. Number of Boomerangs
// Easy   45%


// Given n points in the plane that are all pairwise distinct, a "boomerang" is a
// tuple of points (i, j, k) such that the distance between i and j equals the
// distance between i and k (the order of the tuple matters).

// Find the number of boomerangs. You may assume that n will be at most 500 and
// coordinates of points are all in the range [-10000, 10000] (inclusive).

// Example:

// Input:
// [[0,0],[1,0],[2,0]]

// Output:
// 2

// Explanation:
// The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]


/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = function(points) {
  const { sqrt, pow } = Math
  const distance = (a, b) => sqrt(pow(a[0] - b[0], 2) + pow(a[1] - b[1], 2))

  const n = points.length
  let result = 0
  for (let i = 0; i < n; i++) {
    const hash = {}
    for (let j = 0; j < n; j++) {
      const d = distance(points[i], points[j])
      if (!hash[d]) hash[d] = 0
      hash[d]++
    }
    for (let key in hash) {
      result += hash[key] * (hash[key] - 1)
    }
  }
  return result
}

;[
  [[0,0],[1,0],[2,0]],          // 2
].forEach(points => {
  console.log(numberOfBoomerangs(points))
})

// Solution:
// 对于每个点，计算其到其他点的距离，将距离保存在哈希表中。
// 在哈希表中，键名为距离值，值为距离为键名的数量。
// 再对每个距离数量 a，求 a * (a - 1) (长度为2的排列数)

// Submission Result: Accepted

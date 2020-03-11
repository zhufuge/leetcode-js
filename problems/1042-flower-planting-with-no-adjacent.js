// 1042. Flower Planting With No Adjacent
// Easy   48%


// You have N gardens, labelled 1 to N.  In each garden, you want to plant one of
// 4 types of flowers.
// paths[i] = [x, y] describes the existence of a bidirectional path from garden
// x to garden y.
// Also, there is no garden that has more than 3 paths coming into or leaving it.
// Your task is to choose a flower type for each garden such that, for any two
// gardens connected by a path, they have different types of flowers.
// Return any such a choice as an array answer, where answer[i] is the type of
// flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3,
// or 4.  It is guaranteed an answer exists.

// Example 1:
// Input: N = 3, paths = [[1,2],[2,3],[3,1]]
// Output: [1,2,3]
// Example 2:
// Input: N = 4, paths = [[1,2],[3,4]]
// Output: [1,2,1,2]
// Example 3:
// Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
// Output: [1,2,3,4]

// Note:
//     1 <= N <= 10000
//     0 <= paths.size <= 20000
//     No garden has 4 or more paths coming into or leaving it.
//     It is guaranteed an answer exists.


/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = function(N, paths) {
  const graph = []
  for (let i = 0; i < N; i++) graph[i] = []
  for (let path of paths) {
    graph[path[0] - 1].push(path[1] - 1)
    graph[path[1] - 1].push(path[0] - 1)
  }

  const result = Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    const adjFlowers = Array(5).fill(0)
    for (let adj of graph[i]) {
      adjFlowers[result[adj]] = 1
    }
    for (let j = 4; j > 0; j--) {
      if (!adjFlowers[j]) result[i] =  j
    }
  }
  return result
}

;[
  [3, [[1,2],[2,3],[3,1]]],                   // [1,2,3]
  [4, [[1,2],[3,4]]],                         // [1,2,1,2]
  [4, [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]], // [1,2,3,4]
].forEach(([N, paths]) => {
  console.log(gardenNoAdj(N, paths))
})

// Solution:
// 首先将连线转化成图结构,
// 按顺序访问每个点，找出该点的相邻点中没有填过的最小数，填入即可。

// Submission Result: Accepted
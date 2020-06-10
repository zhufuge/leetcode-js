// 1237. Find Positive Integer Solution for a Given Equation
// Easy   69%

// Given a function  f(x, y) and a value z, return all positive integer pairs x
// and y where f(x,y) == z.
// The function is constantly increasing, i.e.:
//     f(x, y) < f(x + 1, y)
//     f(x, y) < f(x, y + 1)
// The function interface is defined like this:

// interface CustomFunction {
// public:
//   // Returns positive integer f(x, y) for any given positive integer x and y.
//   int f(int x, int y);
// };

// For custom testing purposes you're given an integer function_id and a target z
// as input, where function_id represent one function from an secret internal
// list, on the examples you'll know only two functions from the list.
// You may return the solutions in any order.

// Example 1:
// Input: function_id = 1, z = 5
// Output: [[1,4],[2,3],[3,2],[4,1]]
// Explanation: function_id = 1 means that f(x, y) = x + y
// Example 2:
// Input: function_id = 2, z = 5
// Output: [[1,5],[5,1]]
// Explanation: function_id = 2 means that f(x, y) = x * y

// Constraints:
//     1 <= function_id <= 9
//     1 <= z <= 100
//     It's guaranteed that the solutions of f(x, y) == z will be on the range 1
// <= x, y <= 1000
//     It's also guaranteed that f(x, y) will fit in 32 bit signed integer if 1
// <= x, y <= 1000

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
const findSolution = function (customfunction, z) {
  const queue = [[1, 1, true]]
  const res = []
  while (queue.length) {
    const [i, j, isLeft] = queue.shift()
    const r = customfunction.f(i, j)
    if (r === z) {
      res.push([i, j])
    } else if (r < z) {
      if (isLeft) queue.push([i, j + 1, true])
      queue.push([i + 1, j, false])
    }
  }
  return res
}

;[
  [{ f: (x, y) => x + y }, 5],
  [{ f: (x, y) => x * y }, 5],
].forEach(([f, z]) => {
  console.log(findSolution(f, z))
})

// Solution:
//           1,1
//          /   \
//       2,1    1,2
//       /   \     \
//    3,1    2,2   1,3
//    /  \     \     \
// 4,1   3,2    2,3   1,4
// 递归广度遍历BFS，其中右子节点只遍历右子树
// 使用 queue 队列和循环遍历实现递归

// Submission Result: Accepted

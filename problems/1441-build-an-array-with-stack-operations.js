// 1441. Build an Array With Stack Operations
// Easy   69%


// Given an array target and an integer n. In each iteration, you will read a
// number from  list = {1,2,3..., n}.
// Build the target array using the following operations:
//     Push: Read a new element from the beginning list, and push it in the
// array.
//     Pop: delete the last element of the array.
//     If the target array is already built, stop reading more elements.
// You are guaranteed that the target array is strictly increasing, only
// containing numbers between 1 to n inclusive.
// Return the operations to build the target array.
// You are guaranteed that the answer is unique.

// Example 1:
// Input: target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation:
// Read number 1 and automatically push in the array -> [1]
// Read number 2 and automatically push in the array then Pop it -> [1]
// Read number 3 and automatically push in the array -> [1,3]
// Example 2:
// Input: target = [1,2,3], n = 3
// Output: ["Push","Push","Push"]
// Example 3:
// Input: target = [1,2], n = 4
// Output: ["Push","Push"]
// Explanation: You only need to read the first 2 numbers and stop.
// Example 4:
// Input: target = [2,3,4], n = 4
// Output: ["Push","Pop","Push","Push","Push"]

// Constraints:
//     1 <= target.length <= 100
//     1 <= target[i] <= 100
//     1 <= n <= 100
//     target is strictly increasing.


/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function(target, n) {
  const res = []
  for (let i = 0, j = 1; j <= n; j++) {
    if (target[i] === j) {
      res.push('Push')
      if (++i >= target.length) break
    } else {
      res.push('Push', 'Pop')
    }
  }
  return res
}

;[
  [[1,3], 3],
  [[1,2,3], 3],
  [[1,2], 4],
  [[2,3,4], 4],
  [[4,6,8], 12],
].forEach(([target, n]) => {
  console.log(buildArray(target, n))
})

// Solution:
// 遍历数字 1~n
// 匹配 target[i] 时，使用 "Push"
// 若不匹配 使用 "Push" + "Pop"
// 当 i > target.length 后，结束

// Submission Result: Accepted
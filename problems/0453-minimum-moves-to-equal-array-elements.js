// 453. Minimum Moves to Equal Array Elements
// Easy   47%


// Given a non-empty integer array of size n, find the minimum number of moves
// required to make all array elements equal, where a move is incrementing n - 1
// elements by 1.

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]


/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function(nums) {
  nums.sort((a, b) => b - a)
  let result = 0
  for (let i = 1, n = nums.length; i < n; i++) {
    result += (nums[i - 1] - nums[i]) * i
  }
  return result
}

;[
  [1,2,3],                      // 3
  [1,3,6],                      // 7
  [3,2,7,5],                    // 9
].forEach(nums => {
  console.log(minMoves(nums))
})

// Solution:
// 先按降序排序，使元素不断向前一个元素变化。
// 每完成一个元素的变化，该元素之前的元素都会变成一样的元素。
// 假设当前元素与前一个元素的差为 a，且该元素前有 k 个元素，则需要变化 a x k 次。

// Submission Result: Accepted

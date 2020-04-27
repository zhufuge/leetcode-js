// 462. Minimum Moves to Equal Array Elements II
// Medium   51%


// Given a non-empty integer array, find the minimum number of moves required to
// make all array elements equal, where a move is incrementing a selected element
// by 1 or decrementing a selected element by 1.

// You may assume the array's length is at most 10,000.

// Example:

// Input:
// [1,2,3]

// Output:
// 2

// Explanation:
// Only two moves are needed (remember each move increments or decrements one
// element):

// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]


/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  const mid = nums.length >> 1
  let result = 0
  for (let num of nums) result += Math.abs(nums[mid] - num)
  return result
}

;[
  [1, 2, 3],                    // 2
  [1, 5, 12, 16, 21, 22, 27],   // 52
  [1, 5, 12, 16, 21, 49],      // 68
].forEach(nums => {
  console.log(minMoves2(nums))
})

// Solution:
// 先排序找到中位数（若长度为偶数，则可选两个数中的任意一个）
// 将其他数全部移到与中位数相同的数即可。

// TODO: #462 为何选中位数为对齐数？

// Submission Result: Accepted

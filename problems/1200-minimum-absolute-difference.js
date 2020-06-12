// 1200. Minimum Absolute Difference
// Easy   67%


// Given an array of distinct integers arr, find all pairs of elements with the
// minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair
// [a, b] follows
//     a, b are from arr
//     a < b
//     b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with
// difference equal to 1 in ascending order.
// Example 2:
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

// Constraints:
//     2 <= arr.length <= 10^5
//     -10^6 <= arr[i] <= 10^6


/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b)
  const res = [], n = arr.length
  let min = 2000000
  for (let i = 1; i < n; i++) min = Math.min(min, arr[i] - arr[i - 1])
  for (let i = 1; i < n; i++)
    if (arr[i] - arr[i - 1] === min) res.push([arr[i - 1], arr[i]])
  return res
}

;[
  [4,2,1,3],
  [1,3,6,10,15],
  [3,8,-10,23,19,-4,-14,27],
].forEach((arr) => {
  console.log(minimumAbsDifference(arr))
})

// Solution:
// 先按从小到大排序数组
// 遍历一遍数组，计算出每两个相邻数的差中的最小值 min
// 再遍历一遍数组，取出差等于 min 的所有数对。

// Submission Result: Accepted
// 1394. Find Lucky Integer in an Array
// Easy   66%


// Given an array of integers arr, a lucky integer is an integer which has a
// frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers
// return the largest of them. If there is no lucky integer return -1.

// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] ==
// 2.
// Example 2:
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
// Example 4:
// Input: arr = [5]
// Output: -1
// Example 5:
// Input: arr = [7,7,7,7,7,7,7]
// Output: 7

// Constraints:
//     1 <= arr.length <= 500
//     1 <= arr[i] <= 500


/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function(arr) {
  const frequency = Array(501).fill(0)
  for (let i of arr) frequency[i]++
  for (let i = 500; i > 0; i--) if (frequency[i] === i) return i
  return -1
}

;[
  [2,2,3,4], // 2
  [1,2,2,3,3,3], // 3
  [2,2,2,3,3], // -1
  [5], // -1
  [7,7,7,7,7,7,7], // 7
].forEach((arr) => {
  console.log(findLucky(arr))
})

// Solution:
// 使用一个数组计数，再遍历该数组找到最大的幸运数。

// Submission Result: Accepted
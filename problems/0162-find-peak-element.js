// 162. Find Peak Element
// Medium   37%


// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return
// its index.

// The array may contain multiple peaks, in that case return the index to any one
// of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function
// should return the index number 2.

// click to show spoilers.

// Note:
// Your solution should be in logarithmic complexity.

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  const n = nums.length
  let i = 0, j = n - 1
  while (i < j) {
    const mid = (i + j) >> 1
    if (nums[mid] < nums[mid + 1]) i = mid + 1
    else j = mid
  }
  return i
}

;[
  [1,2,3,1],                    // 2
  [1,2,3,4,5,6,7,8,9,0],        // 8
  [5,4,3,2,1],                  // 0
  [1,2,3,4,5,6],                // 5
].forEach(nums => {
  console.log(findPeakElement(nums))
})

// Solution:
// 二分查找。
// 若中位数小于其后一位，说明后面有更大的数，
// 且有 nums[-1] = nums[n] = -Infinity 做保障，
// i = mid + 1，继续
// 否则 j = mid，继续

// Submission Result: Accepted

// 34. Search for a Range
// Medium 31% locked:false

// Given an array of integers sorted in ascending order, find the starting and
// ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  const n = nums.length
  let i = 0, j = n - 1, mid
  while (i <= j) {
    mid = Math.trunc((i + j) / 2)
    if (target < nums[mid]) j = mid - 1
    else if (target > nums[mid]) i = mid + 1
    else {
      let p = mid, q = mid
      while (p > 0 && nums[p - 1] === target) p--
      while (q < n - 1 && nums[q + 1] === target) q++
      return [p, q]
    }
  }
  return [-1, -1]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))


const twoBinary = function(nums, target) {
  const n = nums.length, ret = [-1, -1]
  let i = 0, j = n - 1
  // Search for the left one
  while (i < j) {
    const mid = Math.trunc((i + j) / 2)
    if (nums[mid] < target) i = mid + 1
    else j = mid
  }
  if (nums[i] !== target) return ret
  else ret[0] = i

  // Search for the right one
  j = n - 1  // We don't have to set i to 0 the second time.
  while (i < j) {
    const mid = Math.trunc((i + j) / 2 + 1)	// Make mid biased to the right
    if (nums[mid] > target) j = mid - 1
    else i = mid				// So that this won't make the search range stuck.
  }
  ret[1] = j
  return ret
}

console.log(twoBinary([5, 7, 7, 8, 8, 10], 9))

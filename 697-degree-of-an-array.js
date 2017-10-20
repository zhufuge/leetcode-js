// 697. Degree of an Array
// Easy 48% locked:false



// Given a non-empty array of non-negative integers nums, the degree of this
// array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray
// of nums, that has the same degree as nums.

// Example 1:

// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// Example 2:

// Input: [1,2,2,3,1,4,2]
// Output: 6

// Note:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.



/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums) {
  const length = nums.length
  if (length === 0) return 0

  const hash = {}
  let result = Infinity,
      maxFreq = 0
  for (let i = 0; i < length; i++) {
    const key = nums[i]
    if (hash[key]) {
      hash[key].push(i)
    } else {
      hash[key] = [i]
    }

    const array = hash[key],
          len = array.length
    if (len >= maxFreq) {
      const width = array[len - 1] - array[0] + 1
      result = (len === maxFreq ? Math.min(result, width) : width)
      maxFreq = len
    }
  }

  return result
}

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))

// Submission Result: Accepted

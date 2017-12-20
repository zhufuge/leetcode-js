// 485. Max Consecutive Ones
// Easy   53%


// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000


/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let result = 0, consecutive = 0
  for (let num of nums) {
    consecutive = num ? consecutive + 1 : 0
    if (consecutive > result) result = consecutive
  }
  return result
}

;[
  [1,1,0,1,1,1],                // 3
].forEach(nums => {
  console.log(findMaxConsecutiveOnes(nums))
})

// Solution:
// ...One pass, by a variable consecutive

// Submission Result: Accepted

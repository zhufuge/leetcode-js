// 238. Product of Array Except Self
// Medium   49%


// Given an array of n integers where n > 1, nums, return an array output such
// that output[i] is equal to the product of all the elements of nums except
// nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array
// does not count as extra space for the purpose of space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const result = [1], n = nums.length
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  for (let i = n - 1, right = 1; i >= 0; i--) {
    result[i] *= right
    right *= nums[i]
  }
  return result
}

;[
  [1,2,3,4],                    // [24, 12, 8, 6]
  [0,4,0],                      // [0,0,0]
].forEach(nums => {
  console.log(productExceptSelf(nums))
})

// Solution:
// 首先构造一个新的作为答案的数组。
// 初始化第一个数为1；
// 其后每个数都是前一个位置的数与输入数组相同位置的数的乘积。

// 最后，新数组的每个位置，都是输入数组中的相同位置的 前面全部数字的乘积。

// 再次从后面遍历到前面，每次记录每个位置之后的 全部数字的乘积，
// 并让该数乘上该位置原来保留的 前面全部数字的乘积，
// 这样就获得了除了其自身的所有数的乘积。

// Submission Result: Accepted

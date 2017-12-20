// 167. Two Sum II - Input array is sorted
// Easy   47%


// Given an array of integers that is already sorted in ascending order, find two
// numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they
// add up to the target, where index1 must be less than index2. Please note that
// your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution and you may not
// use the same element twice.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  let i = 0, j = numbers.length - 1
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum > target) j--
    else if (sum < target) i++
    else return [i + 1, j + 1]
  }
  return [0, 0]
}

;[
  [[2,7,11,15], 9],                  // [1,2]
].forEach(args => {
  console.log(twoSum(...args))
})

// Solution:
// 因为已经排好序
// 因此使用两个变量来保存数字下标，
// 从外围开始选择两个数字，计算n[i] + n[j]，若大于target，说明大的数字太大了。
// 若小于，说明选的小的数字太小了。
// 若等于，则是答案。

// Submission Result: Accepted

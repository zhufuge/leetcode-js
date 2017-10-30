// 645. Set Mismatch
// Easy 40% locked:false


// The set S originally contains numbers from 1 to n. But unfortunately, due to
// the data error, one of the numbers in the set got duplicated to another number
// in the set, which results in repetition of one number and loss of another
// number.

// Given an array nums representing the data status of this set after the error.
// Your task is to firstly find the number occurs twice and then find the number
// that is missing. Return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]

// Note:

// The given array size will in the range [2, 10000].
// The given array's numbers won't have any order.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
  const length = nums.length
  for (let i = 0; i < length;) {
    const num = nums[i], swap = nums[num - 1]
    if (num !== i + 1 && num !== swap) {
      [nums[num - 1], nums[i]] = [num, swap]
    } else {
      i++
    }
  }

  let i = 0
  while (i < length && nums[i] === ++i);
  return [nums[i - 1], i]
}

;[
  [1,2,2,4],                    // [2,3]
  [6,4,2,3,1,5,8,8],            // [8,7]
  [6,4,2,3,1,5,8,8,7],          // [8,9]
  [1,1],                        // [1,2]
  [2,2],                        // [2,1]
].forEach(nums => {
  console.log(findErrorNums(nums))
})

// Solution:
// 先为元素找位置。
// 在交换元素上要保证，交换的元素不同，不然会进入死循环。
// 最后缺少的元素的位置上会出现重复的那个元素。
// 再遍历一遍就可以找出来了。

// Submission Result: Accepted

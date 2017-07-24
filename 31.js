// Implement next permutation, which rearranges numbers into the
// lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest
// possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its
//   corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  const n = nums.length
  let top = n - 1
  while (top > 0 && nums[top - 1] >= nums[top]) top--

  if (top !== 0) {
    const tmp = top - 1
    let big = tmp
    while (big + 1 < n && nums[tmp] < nums[big + 1]) big++
    ;[nums[tmp], nums[big]] = [nums[big], nums[tmp]]
  }

  let bottom = n - 1
  while (top < bottom) {
    [nums[top], nums[bottom]] = [nums[bottom], nums[top]]
    top++
    bottom--
  }
}

//const a = [3, 6, 5, 4]
const a = [5, 1, 1]
console.log(a)
nextPermutation(a)
console.log(a)

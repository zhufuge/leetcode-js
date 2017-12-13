// 47. Permutations II
// Medium   33%

// Given a collection of numbers that might contain duplicates, return all
// possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:

// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  const result = [], n = nums.length
  function iter(array, used) {
    if (array.length === n) result.push([...array])
    else {
      for (let i = 0; i < n; i++) {
        if (!used[i] && !(!used[i - 1] && nums[i] === nums[i - 1])) {
          array.push(nums[i])
          used[i] = true
          iter(array, used)
          array.pop(nums[i])
          used[i] = false
        }
      }
    }
  }
  iter([], [])
  return result
}

;[
  [1,1,2],
].forEach(nums => {
  console.log(permuteUnique(nums))
})

// Solution:
// 使用一个标记数组表示，某个位置的数是否使用过。
// 在每层中选择一个没有使用过的数，且该数在该层之前也没有使用过。

// Submission Result: Accepted

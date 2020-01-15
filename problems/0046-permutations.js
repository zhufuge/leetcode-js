// 46. Permutations
// Medium   44%

// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:

// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const result = [], n = nums.length
  function iter(used) {
    if (used.length === n) result.push([...used])
    else {
      for (let num of nums) {
        if (!used.includes(num)) {
          used.push(num)
          iter(used)
          used.pop(num)
        }
      }
    }
  }
  iter([])
  return result
}

;[
  [1,2,3],
].forEach(nums => {
  console.log(permute(nums))
})

// Solution:
// 使用回溯算法遍历整个数组构成的树，
// 在叶子处，将路径加入答案中。

// Submission Result: Accepted

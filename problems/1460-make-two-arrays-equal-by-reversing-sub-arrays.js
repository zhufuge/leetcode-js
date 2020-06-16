// 1460. Make Two Arrays Equal by Reversing Sub-arrays
// Easy   77%


// Given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty sub-array of arr and reverse it. You
// are allowed to make any number of steps.
// Return True if you can make arr equal to target, or False otherwise.

// Example 1:
// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to
// do so.
// Example 2:
// Input: target = [7], arr = [7]
// Output: true
// Explanation: arr is equal to target without any reverses.
// Example 3:
// Input: target = [1,12], arr = [12,1]
// Output: true
// Example 4:
// Input: target = [3,7,9], arr = [3,7,11]
// Output: false
// Explanation: arr doesn't have value 9 and it can never be converted to target.
// Example 5:
// Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
// Output: true

// Constraints:
//     target.length == arr.length
//     1 <= target.length <= 1000
//     1 <= target[i] <= 1000
//     1 <= arr[i] <= 1000


/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function(target, arr) {
  const hash = {}
  for (let a of target) hash[a] = (hash[a] || 0) + 1
  for (let a of arr) {
    if (hash[a] === undefined || --hash[a] < 0) return false
  }
  return true
}

;[
  [[1,2,3,4], [2,4,1,3]],
  [[7],[7]],
  [[1,12],[12,1]],
  [[3,7,9],[3,7,11]],
  [[1,1,1,1,1],[1,1,1,1,1]],
].forEach(([target, arr]) => {
  console.log(canBeEqual(target, arr))
})

// Solution:
// 其实，只需要两个数组的数能一一对应，就可以通过旋转来相互转换。
// 使用 hash 记录target数组中每个数出现的次数，
// 再判断 arr 是否能匹配 hash 中的键值对。

// 也可以排序两个数组，再按顺序遍历，看是否一一对应。不过这个的时间复杂度高了。

// Submission Result: Accepted
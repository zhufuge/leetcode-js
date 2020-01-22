// 1287. Element Appearing More Than 25% In Sorted Array
// Easy   60%


// Given an integer array sorted in non-decreasing order, there is exactly one
// integer in the array that occurs more than 25% of the time.
// Return that integer.

// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

// Constraints:
//     1 <= arr.length <= 10^4
//     0 <= arr[i] <= 10^5


/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
  const minLength = Math.floor(arr.length / 4)
  for (let i = 0; i < arr.length - minLength; i++) {
    if (arr[i] === arr[i + minLength]) return arr[i]
  }
  return arr[0]
}

const recursion = function(arr) {
  const n = arr.length
  if (n === 1) return arr[0]

  const minLength = Math.floor(n / 4) + 1
  
  function find(p, q) {
    if (q === p || q - p < minLength - 1) return -1
    if (q - p === minLength - 1) return arr[p] === arr[q] ? arr[p] : -1

    const mid = Math.floor((p + q) / 2)

    const left = find(p, mid)
    if (left > 0) return left

    const right = find(mid + 1, q)
    if (right > 0) return right

    for (let i = 0; i < minLength; i++) {
      if (arr[mid - i] === arr[mid - i + minLength - 1]) {
        return arr[mid - i]
      }
    }
    return -1
  }

  return find(0, n - 1)
}

;[
  [1],                         // 1
  [0,0,1],                     // 0
  [0,1,1,2],                   // 1
  [1,2,3,3],                   // 3
  [1,2,2,6,6,6,6,7,10],        // 6
  [0,0,0,1,1,1,2,2,2,3,3,3,3], // 3
  [1,1,2,2,3,3,3,3]            // 3
].forEach((arr) => {
  console.log(findSpecialInteger(arr))
})

// Solution:
// 算法一： 遍历一遍
// 先根据 arr 长度计算 minLength (至少需要几个数是相同的)
// 因为数组已经排序，
// 遍历数组时，比较 arr[i] 和 arr[i + minLength]，相同即可返回该数

// 算法二： 递归
// 强行二分递归，算法难度增加，时间空间复杂度也不好计算
// 编码时间增加，运行速度都不一定增加
// 算法能力增强前，尽量写这样的算法

// Submission Result: Accepted
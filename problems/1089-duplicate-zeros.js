// 1089. Duplicate Zeros
// Easy   59%


// Given a fixed length array arr of integers, duplicate each occurrence of zero,
// shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything
// from your function.

// Example 1:
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to:
// [1,0,0,2,3,0,0,4]
// Example 2:
// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to:
// [1,2,3]

// Note:
//     1 <= arr.length <= 10000
//     0 <= arr[i] <= 9


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
      arr.pop()
    }
  }
}

const better = function(arr) {
  let countZero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) countZero++
  }
  
  let len = arr.length + countZero
  for (let i = arr.length - 1, j = len - 1; i < j; i--, j--) {
    if (arr[i] != 0) {
      if (j < arr.length) arr[j] = arr[i]
    } else {
      if (j < arr.length) arr[j] = arr[i]
      j--
      if (j < arr.length) arr[j] = arr[i]
    }
  }
}

;[
  [1,0,2,3,0,4,5,0], // [1,0,0,2,3,0,0,4]
  [1,2,3],           // [1,2,3]
  [1,0,0,0,1,2,3,4], // [1,0,0,0,0,0,0,1]
].forEach((arr) => {
  // duplicateZeros(arr)
  better(arr)
  console.log(arr)
})

// Solution:
// 使用 js 的 splice 和 pop 函数，直接插入和直接删除最后一个项
// 比较直接，但作为算法来说，不好计算时间和空间复杂度

// 经过参考后，更好的方法
// 先统计 0 的个数，
// 之后从尾部开始移动数字，
// 详细查看代码
// TO(n)-SO(1)

// Submission Result: Accepted
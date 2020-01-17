// 1299. Replace Elements with Greatest Element on Right Side
// Easy   75%


// Given an array arr, replace every element in that array with the greatest
// element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

// Example 1:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Constraints:
//     1 <= arr.length <= 10^4
//     1 <= arr[i] <= 10^5


/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
  let last = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let biger = Math.max(last, arr[i + 1] || -1)
    last = arr[i]
    arr[i] = biger
  }
  return arr
}

;[
  [17,18,5,4,6,1], // [18,6,6,6,1,-1]
].forEach((arr) => {
  console.log(replaceElements(arr))
})

// Solution:
// 从数组的后面开始处理和替换
// 使用 last 保存当前位置的数
// 每次比较 last 和已替换的最左边的数，取其大者，填入当前位置

// Submission Result: Accepted
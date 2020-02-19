// 1122. Relative Sort Array
// Easy   67%


// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all
// elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are
// the same as in arr2.  Elements that don't appear in arr2 should be placed at
// the end of arr1 in ascending order.

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Constraints:
//     arr1.length, arr2.length <= 1000
//     0 <= arr1[i], arr2[i] <= 1000
//     Each arr2[i] is distinct.
//     Each arr2[i] is in arr1.


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const slot = []
  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i]
    if (slot[a]) {
      slot[a] += 1
    } else {
      slot[a] = 1
    }
  }
  const result = []
  for (let i = 0; i < arr2.length; i++) {
    const a = arr2[i]
    for (let j = 0; j < slot[a]; j++) {
      result.push(a)
    }
    slot[a] = 0
  }
  for (let i = 0; i < slot.length; i++) {
    if (slot[i] > 0) {
      for (let j = 0; j < slot[i]; j++) {
        result.push(i)
      }
    }
  }
  return result
}

;[
  [[2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]],
].forEach(([arr1, arr2]) => {
  console.log(relativeSortArray(arr1, arr2))
})

// Solution:
// 利用桶排序的思想
// 1.将arr1的每个数放到该数字的桶中，桶里的数字代表该数的个数
// 2.按照arr2中的数a去取桶中的数n，将n个a插入到答案中
// 3.最后将桶中剩余的数按顺序插入到答案中

// Submission Result: Accepted
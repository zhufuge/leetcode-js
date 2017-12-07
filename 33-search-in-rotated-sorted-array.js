// 33. Search in Rotated Sorted Array
// Medium   32%

// Suppose an array sorted in ascending order is rotated at some pivot unknown
// to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its
// index, otherwise return -1.

// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const iter = (i, j) => {
    if (i > j) return -1

    const mid = (i + j) >> 1,
          rotate = nums[mid] > nums[j] // Is rotate point in the back of mid ?
    if (target < nums[mid]) {
      return Math.max(iter(i, mid - 1), rotate ? iter(mid + 1, j) : -1)
    } else if (target > nums[mid]) {
      return Math.max(rotate ? -1 : iter(i, mid - 1), iter(mid + 1, j))
    } else return mid
  }

  return iter(0, nums.length - 1)
}

;[
  [[4,5,6,7,0,1,2], 0],         // 4
].forEach(args => {
  console.log(search(...args))
})

// Solution:
// 因为已经排好序，因此使用二分查找法，
// 由于是旋转过，需要考虑两种情况，
// 1. 旋转中心在中点后面
// 2. 旋转中心在中点前面

// 通过比较中点数与最后一个数的大小来区分这两种情况
// 中点数大，则是情况1； 若小，则是情况2。

// 在不断递归的过程中，还会出现查找数组是没有旋转过的。

// 而二分查找又有3种情况
// 1. 中点数等于目标数
// 2.      大于
// 3.      小于

// 小于+情况1，需要分别递归左右两边
// 小于+情况2，只需要递归左边

// 大于+情况1，只需要递归右边
// 大于+情况2，需要分别递归左右两边

// Submission Result: Accepted

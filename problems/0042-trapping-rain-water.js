// 42. Trapping Rain Water
// Hard   37%

// Given n non-negative integers representing an elevation map where the width
// of each bar is 1, compute how much water it is able to trap after raining.

// For example,
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped. Thanks
// Marcos for contributing this image!


/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const n = height.length
  let result = 0, i = 0, j = n - 1, min = 0
  while (i < j) {
    if (height[i] <= min) {
      result += min - height[i]
      i++
    } else if (height[j] <= min) {
      result += min - height[j]
      j--
    } else {
      min = Math.min(height[i], height[j])
    }
  }
  return result
}

;[
  [0,1,0,2,1,0,1,3,2,1,2,1],
  [1,2],
  [4,2,3],
  [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3],
].forEach(height => {
  console.log(trap(height))
})

// Solution:
// 从两边开始，向中间遍历。
// 记录一个变量，其值为当前遍历过得数中较高的可作为容器边界的两个数中较小的一个。
// 因为容器是以小的一边的边界来计算容量的。

// 在遍历过程中
// 小于小边界的将会计为容量，
// 大于小边界，则将改变较小边界。

// Submission Result: Accepted

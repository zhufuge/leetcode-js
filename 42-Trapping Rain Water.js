// 42. Trapping Rain Water
// Hard 37% locked:false

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
  let res = 0
  let i = 0, j = n - 1, min = 0
  while (i < j) {
    if (height[i] <= min) {
      res += min - height[i]
      i++
    } else if (height[j] <= min) {
      res += min - height[j]
      j--
    } else {
      min = Math.min(height[i], height[j])
    }
  }

  return res
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([1,2]))
console.log(trap([4, 2, 3]))
console.log(trap([6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]))

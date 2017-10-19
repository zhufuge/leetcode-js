// 11. Container With Most Water
// Medium 36% locked:false

// Given n non-negative integers a1, a2, ..., an, where each represents a point
// at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
// of line i is at (i, ai) and (i, 0). Find two lines, which together with
// x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea0 = function(height) {
  const n = height.length
  if (n <= 1) return 0

  let result = 0, max = 0
  for (let i = 0; i < n; i++) {

    for (let j = i + 1; j < n; j++) {
      const area = Math.min(height[i], height[j]) * (j - i)
      if (area > result) result = area
    }
  }

  return result
}

const maxArea = function(height) {
  let result = 0, i = 0, j = height.length - 1
  while (i < j) {
    const min = height[i] > height[j] ? true : false
    result = Math.max(result, height[min ? j : i] * (j - i))
    if (min) j--
    else i++
  }

  return result
}

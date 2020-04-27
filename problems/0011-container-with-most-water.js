// 11. Container With Most Water
// Medium   36%

// Given n non-negative integers a1, a2, ..., an, where each represents a point
// at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
// of line i is at (i, ai) and (i, 0). Find two lines, which together with
// x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let result = 0, i = 0, j = height.length - 1
  while (i < j) {
    const min = Math.min(height[i] , height[j])
    result = Math.max(result, min * (j - i))
    if (min === height[j]) j--
    else i++
  }
  return result
}

;[
  [1, 2, 1, 3, 4, 2, 1],        // 8
].forEach(height => {
  console.log(maxArea(height))
})

// Solution:
// 从两侧开始向中间遍历，
// 两侧中小的哪一个向中间前进（相等的话可随意一边）。
// 在遍历过程中每次计算一次构成的容器的容量，保存最大的作为答案。

// 为什么小的一侧前进？这会不会错过最大的容器呢？
// 有待严谨的分析 ;p
// TODO: #11 solution

// Submission Result: Accepted

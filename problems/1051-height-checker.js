// 1051. Height Checker
// Easy   68%


// Students are asked to stand in non-decreasing order of heights for an annual
// photo.
// Return the minimum number of students that must move in order for all students
// to be standing in non-decreasing order of height.

// Example 1:
// Input: heights = [1,1,4,2,1,3]
// Output: 3

// Constraints:
//     1 <= heights.length <= 100
//     1 <= heights[i] <= 100


/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
  const arr = [...heights]
  arr.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < heights.length; i++) {
    if (arr[i] !== heights[i]) count++
  }
  return count
}

;[
  [1,1,4,2,1,3],    // 3
  [1,2,3,4,5,3],    // 3
  [3,2,1],          // 2
].forEach((heights) => {
  console.log(heightChecker(heights))
})

// Solution:
// 复制数组，先排序，再和原数组比较，找出位置不同的数的个数。

// Submission Result: Accepted
// 84. Largest Rectangle in Histogram
// Hard 27% locked:false

// Given n non-negative integers representing the histogram's bar heights where
// the width of each bar is 1, find the area of largest rectangle in the
// histogram.


// Above is a histogram where width of each bar is 1, given heights =
// [2,1,5,6,2,3].


// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// For example,
// Given heights = [2,1,5,6,2,3],
// return 10.

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
  heights.push(0)
  const n = heights.length, stack = []
  let res = 0
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      const h = heights[stack.pop()]
      const sidx = stack.length > 0 ? stack[stack.length - 1] : -1
      res = Math.max(h * (i - sidx - 1), res)
      console.log(i, res);
    }
    stack.push(i)
  }

  return res
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))

const exceededTime = function(heights) {
  const n = heights.length
  const largest = (i, j) => {
    if (i > j) return 0
    let min = i
    for (let k = i; k <= j; k++) {
      if (heights[k] < heights[min]) min = k
    }
    return Math.max(
      heights[min] * (j - i + 1),
      Math.max(largest(i, min - 1), largest(min + 1, j))
    )
  }

  return largest(0, n - 1)
}

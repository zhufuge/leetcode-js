// 492. Construct the Rectangle
// Easy   48%


// For a web developer, it is very important to know how to design a web page's
// size. So, given a specific rectangular web page’s area, your job by now is to
// design a rectangular web page, whose length L and width W satisfy the
// following requirements:
// 1. The area of the rectangular web page you designed must equal to the given
// target area.
// 2. The width W should not be larger than the length L, which means L >= W.
// 3. The difference between length L and width W should be as small as possible.

// You need to output the length L and the width W of the web page you designed
// in sequence.

// Example:

// Input: 4
// Output: [2, 2]
// Explanation: The target area is 4, and all the possible ways to construct it
// are [1,4], [2,2], [4,1].
// But according to requirement 2, [1,4] is illegal; according to requirement 3, 
// [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W
// is 2.

// Note:

// The given area won't exceed 10,000,000 and is a positive integer
// The web page's width and length you designed must be positive integers.


/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function(area) {
  let i = Math.trunc(Math.sqrt(area))
  while (i > 1 && area % i !== 0) i--
  return [area / i, i]
}

;[
  4,                            // [2,2]
  1,                            // [1,1]
].forEach(area => {
  console.log(constructRectangle(area))
})

// Solution:
// 求数组 [a, b]，满足 a * b = area，且在所有满足的a，b中，|a - b|最小

// 首先满足的a，b，即是 area 的因子对。
// 找出 area 的因子对，假设 a <= b，那么 a 可以从 1 到 sqrt(area)
// 因为 a <= b；   a * a <= a * b = area；  a <= sqrt(area)

// 再找 |a - b| 最小。
// 假设有两对满足的因子对分别为[a_1, b_1]，[a_2, b_2]，
// 且 a_i <= b_i，a_1 < a_2
// 因为假设了 a_i <= b_i，所以 |a - b| 实际为 b - a
// 比较 (b_1 - a_1) 和 （b_2 - a_2)
// (b_1 - a_1) - (b_2 - a_2) = (b_1 - b_2) + (a_2 - a_1)
// 因为 a_2 > a_1，所以 c / a_1 > c / a_2，即 b_1 - b_2 > 0
// 又因为 a_2 - a_1 > 0
// 所以 (b_1 - a_1) - (b_2 - a_2) > 0
// 因此可以确定，a 越大，|a - b| 越小

// 因此只需找 a 最大时的因子对，就行了。

// Submission Result: Accepted

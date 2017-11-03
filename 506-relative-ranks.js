// 506. Relative Ranks
// Easy   46%


// Given scores of N athletes, find their relative ranks and the people with the
// top three highest scores, who will be awarded medals: "Gold Medal", "Silver
// Medal" and "Bronze Medal".

// Example 1:

// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so
// they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the left two
// athletes, you just need to output their relative ranks according to their
// scores.

// Note:

// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.


/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function(nums) {
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  const rank = nums.slice()
        .sort((a, b) => b - a)
        .reduce((obj, n, i) => (obj[n] = i + 1) && obj, {})
  return nums.map(v => medals[rank[v] - 1] || rank[v] + '')
}

;[
  [5,4,3,2,1],
  [10,3,8,9,4],
].forEach(nums => {
  console.log(findRelativeRanks(nums))
})

// Solution:
// 先排序，得到那个元素的名次，
// 根据名次赋予相应的字符串。
// 主要是编码方面，如何更简洁吧。

// Submission Result: Accepted

// 532. K-diff Pairs in an Array
// Easy   28%


// Given an array of integers and an integer k, you need to find the number of
// unique k-diff pairs in the array. Here a k-diff pair is defined as an integer
// pair (i, j), where i and j are both numbers in the array and their absolute
// difference is k.

// Example 1:

// Input: [3, 1, 4, 1, 5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3,
// 5).Although we have two 1s in the input, we should only return the number of
// unique pairs.

// Example 2:

// Input:[1, 2, 3, 4, 5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4)
// and (4, 5).

// Example 3:

// Input: [1, 3, 1, 5, 4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).

// Note:

// The pairs (i, j) and (j, i) count as the same pair.
// The length of the array won't exceed 10,000.
// All the integers in the given input belong to the range: [-1e7, 1e7].


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function(nums, k) {
  nums.sort((a, b) => a - b)
  const hash = {}, exist = {}
  let result = 0
  for (let num of nums) {
    if (hash[num] != void 0 &&
        exist[num + hash[num]] == void 0) exist[num + hash[num]] = result++
    if (hash[num + k] == void 0) hash[num + k] = num
  }
  return result
}

;[
  [[3,1,4,1,5], 2],             // 2
  [[1,2,3,4,5], 1],             // 4
  [[1,3,1,5,4], 0],             // 1
  [[0,0,0], 0],                 // 1
].forEach(args => {
  console.log(findPairs(...args))
})

// Solution:

// 先排序，有重复的元素要处理时，且不能顺利的一遍过时，只能先牺牲一点点时间，先
// 排序，这样比较好处理。

// 利用两个哈希表，分别记录 待满足的对 和 已满足的对。

// 满足的对要满足两元素的差绝对值为 k。因此 k < 0 时，这样的对是不存在的。k 必须
// 大于或等于 0。这样我们可以想象，在一条线上，其间隔为 k。

// 而他们又是排好序的，因此只要在 待满足的对集合 中加入 其后间隔为 k 的对即可。
// 无须考虑前面的，如果前面存在，到这个元素时，就应该已经存在 已满足的对的集合 里了。

// 已满足的对 中，只需要记录对的两元素之和即可。
// 因为间隔为 k 的任意两个数的和都是不同的。
// 证明：
// 设两个元素分别为 a，b，其满足 |a - b| = k。
// 根据已排好序，每次待满足的且可能满足 a 值和 b 值，都会满足 a => b。
// 因此 a - b = k， b = a - k
// 两数之和 s = a + b = a + (a - k) = a * 2 - k
// s 随 a 变化而变化。

// Submission Result: Accepted

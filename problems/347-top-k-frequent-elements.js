// 347. Top K Frequent Elements
// Medium   48%

// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note:
//  - You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//  - Your algorithm's time complexity must be better than O(n log n), where n
//    is the array's size.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const hash = {}
  for (let num of nums) hash[num] = (hash[num] || 0) + 1

  const bucket = Array(nums.length + 1)
  for (let num in hash) {
    const frequency = hash[num]
    if (bucket[frequency] == null) bucket[frequency] = []
    bucket[frequency].push(parseInt(num))
  }



  const result = []
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i]) result.push(...bucket[i])
  }

  return result
}

;[
  [[1,1,1,2,2,3], 2],           // [1,2]
].forEach(([nums, k]) => {
  console.log(topKFrequent(nums, k))
})

// Solution:
// 使用哈希表来保存数字出现的次数。
// 使用桶数组按出现次数来排序数组。
// 最后从桶数组的末尾开始取k个数。

// Submission Result: Accepted

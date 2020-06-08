// 1331. Rank Transform of an Array
// Easy   58%


// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following
// rules:
//     Rank is an integer starting from 1.
//     The larger the element, the larger the rank. If two elements are equal,
// their rank must be the same.
//     Rank should be as small as possible.

// Example 1:
// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second
// smallest. 30 is the third smallest.
// Example 2:
// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.
// Example 3:
// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]

// Constraints:
//     0 <= arr.length <= 10^5
//     -10^9 <= arr[i] <= 10^9


/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function(arr) {
  const newArr = [...new Set(arr)]
  newArr.sort((a, b) => a - b)
  function find(k) {
    let i = 0, j = newArr.length - 1
    while (i <= j) {
      const mid = (i + j) >>> 1
      if (newArr[mid] > k) j = mid - 1
      else if (newArr[mid] < k) i = mid + 1
      else return mid
    }
    return -1
  }
  for (let i = 0; i < arr.length; i++) arr[i] = find(arr[i]) + 1
  return arr
}

const timeLimitExceeded = function(arr) {
  const n = arr.length, map = {}, res = []
  for (let i = 0; i < n; i++) {
    const num = arr[i]
    if (map[num]) {
      res.push(map[num])
    } else {
      for (let j = 0; j < i; j++) {
        if (num < arr[j]) {
          res[j]++
          map[arr[j]] = res[j]
        }
      }
      res[i] = 1
      for (let k in map) {
        if (num > k) res[i]++
      }
      map[num] = res[i]
    }
  }
  return res
}

const other = function(arr) {
  const A = Array.from(new Set(arr)).sort((a, b) => a - b)
  const rank = {}
  for (let i = 0; i < A.length; i++) rank[A[i]] = i + 1
  for (let i = 0; i < arr.length; i++) arr[i] = rank[arr[i]]
  return arr
}

;[
  [40,10,20,30],
  [1,1,1],
  [37,12,28,9,100,56,80,5,12],
  [4,4,1,2,2,3],
].forEach((arr) => {
  console.log(arrayRankTransform(arr))
  // console.log(other(arr))
})

// Solution:
// 1.
// 使用集合 Set 去重，再排序得到新数组 newArr，
// 遍历 arr, 找到每个数再 newArr 中的位置。

// 2.
// 使用集合 Set 去重，再排序得到新数组 A，
// hashMap 记录每个数的位置
// 遍历 arr，将每个数替换为 hashMap中对应值即可。

// Submission Result: Accepted
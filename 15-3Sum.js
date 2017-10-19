// 15. 3Sum
// Medium 21% locked:false

// Given an array S of n integers, are there elements a, b, c in S such that a +
// b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum0 = function(nums) {
  const len = nums.length, result = []
  const count = {}, pos = new Set(), neg = new Set()
  for (let v of nums) {
    count[v] = (count[v] === void 0) ? 1 : count[v] + 1
    if (v >= 0) pos.add(v)
    else neg.add(v)
  }
  if (count[0] >= 3) result.push([0, 0, 0])

  console.log(count)
  console.log(pos)
  console.log(neg)
  const iter = (a, b) => {
    for (let p of a) {
      const map = {}
      for (let q of b) {
        if (map[q] === void 0) {
          const s = -(p + q)
          if (s === q && count[q] >= 2) result.push([p, q, q])
          else map[-(p + q)] = q
        } else {
          result.push([p, map[q], q])
        }
      }
      console.log(map)
    }
  }

  iter(pos, neg)
  iter(neg, pos)

  return result
}

const threeSum = function(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < n - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
        let lo = i + 1, hi = n - 1, sum = 0 - nums[i]
        while (lo < hi) {
          if (nums[lo] + nums[hi] === sum) {
            result.push([nums[i], nums[lo], nums[hi]])
            while (lo < hi && nums[lo] === nums[lo + 1]) lo++
            while (lo < hi && nums[hi] === nums[hi - 1]) hi--
            lo++
            hi--
          } else if (nums[lo] + nums[hi] < sum) lo++
          else hi--
        }
      }
    }
    return result
}

// console.log(threeSum([0, 0, 0]))
// console.log(threeSum([-2,0,0,2,2,0]))
console.log(threeSum([3,0,-2,-1,1,2]))

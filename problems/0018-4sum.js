// 18. 4Sum
// Medium   27%

// Given an array S of n integers, are there elements a, b, c, and d in S such
// that a + b + c + d = target? Find all unique quadruplets in the array which
// gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  const result = []
  nums.sort((a, b) => a - b)
  const iter = (i, j, next) => {
    if (i + 3 > j) return

    let lo = i + 1, hi = j - 1, s = nums[i] + nums[j]
    const t = s + nums[lo] + nums[hi]
    while(lo < hi) {
      const sum = s + nums[lo] + nums[hi]
      if (sum > target) hi--
      else if (sum < target) lo++
      else {
        result.push([nums[i], nums[lo], nums[hi], nums[j]])
        while (++lo < hi && nums[lo] === nums[lo - 1]);
        while (lo < --hi && nums[hi] === nums[hi + 1]);
      }
    }

    if (next) {
      if (t > target) iter(i, j - 1, true)
      if (t < target) iter(i + 1, j, true)
      if (t === target) {
        iter(i, j - 1, false)
        iter(i + 1, j, true)
      }
    }
  }

  iter(0, nums.length - 1, true)
  return result
}

const On3 = function(nums, target) {
  const result = [], n = nums.length
  if (n < 4) return result

  nums.sort((a, b) => a - b)
  const sum4 = (a, b, c, d) => nums[a] + nums[b] + nums[c] + nums[d]
  for (let i = 0; i < n - 3; i++) {
    if (sum4(i, i + 1, i + 2, i + 3) > target) break
    if (sum4(i, n - 1, n - 2, n - 3) < target) continue
    if (nums[i] === nums[i - 1]) continue

    for(let j = i + 1; j < n - 2; j++) {
      if(sum4(i, j, j + 1, j + 2) > target) break
      if(sum4(i, j, n - 1, n - 2) < target) continue
      if(j > i + 1 && nums[j] === nums[j - 1]) continue
      let lo = j + 1, hi = n - 1
      while (lo < hi) {
        const sum = sum4(i, j, lo, hi)
        if (sum < target) lo++
        else if (sum > target) hi--
        else {
          result.push([nums[i], nums[j], nums[lo], nums[hi]])
          while (++lo < hi && nums[lo] === nums[lo - 1]);
          while (lo < --hi && nums[hi] === nums[hi + 1]);
        }
      }
    }
  }
  return result
}

;[
  [[1, 0, -1, 0, -2, 2], 0],
  [[-3,-1,0,2,4,5], 0],
  [[-3,-2,-1,0,0,1,2,3], 0],
  [[-5,-4,-3,-2,-1,0,0,1,2,3,4,5], 0],
].forEach(args => {
  console.log(fourSum(...args))
  console.log(On3(...args))
})

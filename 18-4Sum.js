// 18. 4Sum
// Medium 27% locked:false

// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

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
  nums.sort((a, b) => a - b)

  const result = []
  const iter = (i, j, next) => {
    if (i + 2 >= j) return

    let p = i + 1, q = j - 1, s = nums[i] + nums[j]
    const t = s + nums[p] + nums[q]
    while(p < q) {
      while (p < q && nums[p] === nums[p + 1]) p++
      while (p < q && nums[q] === nums[q - 1]) q--
      const sum = s + nums[p] + nums[q]
      if (sum > target) q--
      else if (sum < target) p++
      else {
        result.push([nums[i], nums[p], nums[q], nums[j]])
        p++
        q--
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

//console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
//console.log(fourSum([-3,-1,0,2,4,5], 0));
//console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0))
//console.log(fourSum([-5,-4,-3,-2,-1,0,0,1,2,3,4,5], 0))

const On3 = function(nums, target) {
  const ans = [], n = nums.length
  if(n < 4) return ans

  nums.sort((a, b) => a - b)
  for(let i = 0; i < n - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue
    if (nums[i] === nums[i - 1]) continue
    for(let j = i + 1; j < n - 2; j++) {
      if(nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      if(nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue
      if(j > i + 1 && nums[j] === nums[j - 1]) continue
      let low = j + 1, high = n - 1
      while (low < high) {
        let sum = nums[i] + nums[j] + nums[low] + nums[high]
        if(sum === target) {
          ans.push([nums[i], nums[j], nums[low], nums[high]])
          while (low < high && nums[low] === nums[low + 1]) low++
          while (low < high && nums[high] === nums[high - 1]) high--
          low++
          high--
        }

        else if(sum < target) low++
        else high--
      }
    }
  }
  return ans
}

console.log(On3([-5,-4,-3,-2,-1,0,0,1,2,3,4,5], 0))

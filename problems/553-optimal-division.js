// 553. Optimal Division
// Medium   55%

// Given a list of positive integers, the adjacent integers will perform the
// float division. For example, [2,3,4] -> 2 / 3 / 4.

// However, you can add any number of parenthesis at any position to change the
// priority of operations. You should find out how to add parenthesis to get the
// maximum result, and return the corresponding expression in string format.
// Your expression should NOT contain redundant parenthesis.

// Example:

// Input: [1000,100,10,2]
// Output: "1000/(100/10/2)"
// Explanation:
// 1000/(100/10/2) = 1000/((100/10)/2) = 200
// However, the bold parenthesis in "1000/((100/10)/2)" are redundant,
// since they don't influence the operation priority. So you should return
// "1000/(100/10/2)".

// Other cases:
// 1000/(100/10)/2 = 50
// 1000/(100/(10/2)) = 50
// 1000/100/10/2 = 0.5
// 1000/100/(10/2) = 2

// Note:

//     The length of the input array is [1, 10].
//     Elements in the given array will be in range [2, 1000].
//     There is only one optimal division for each test case.

/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivision = function(nums) {
  const n = nums.length
  if (n < 1) return ''
  if (n === 1) return '' + nums[0]
  if (n === 2) return nums[0] + '/' + nums[1]
  let result = nums[0] + '/(' + nums[1]
  for (let i = 2; i < n; i++) {
    result += '/' + nums[i]
  }
  return result + ')'
}

;[
  [1000, 100, 10, 2],           // '1000/(100/10/2)'
  [100, 5, 2, 10],           // '100/(5/2/10)'
].forEach(nums => {
  console.log(optimalDivision(nums))
})

// Solution:
// 若数组长度大于2，则无论怎么加括号第一个数都一定会除以第二个数。
// 若在某个地方加了括号，会改变优先级，从而产生另一种运算，如：
// a/(b/c) = (a*c)/b
// 若无括号，a/b/c = a/(b*c)

// 结合上面两个等式，
// 我们只需要括住第二个数到最后一个数即可。

//   a1 / (a2 / a3 / ... / an)
// = a1 / (a2 / (a3 * a4 * ... * an))
// = (a1 * (a3 * a4 * ... * an)) / a2
// = (a1 * a3 * a4 * ... * an) / a2

// Submission Result: Accepted

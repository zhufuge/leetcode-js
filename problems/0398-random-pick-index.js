// 398. Random Pick Index
// Medium   55%


// Given an array of integers with possible duplicates, randomly output the index
// of a given target number. You can assume that the given target number must
// exist in the array.
// Note:
// The array size can be very large. Solution that uses too much extra space will
// not pass the judge.
// Example:
// int[] nums = new int[] {1,2,3,3,3};
// Solution solution = new Solution(nums);
// // pick(3) should return either index 2, 3, or 4 randomly. Each index should
// have equal probability of returning.
// solution.pick(3);
// // pick(1) should return 0. Since in the array only nums[0] is equal to 1.
// solution.pick(1);


/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const cur = hash[nums[i]]
    if (Number.isInteger(cur)) hash[nums[i]] = [cur, i]
    else if (Array.isArray(cur)) hash[nums[i]].push(i)
    else hash[nums[i]] = i
  }
  this.hash = hash
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const cur = this.hash[target]
  return Number.isInteger(cur)
    ? cur
    : cur[Math.floor(Math.random() * cur.length)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

;[
  [['Solution','pick'], [[[1,2,3,3,3]],[3]]],
].forEach(([commands, data]) => {
  let solution = null
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'Solution':
        solution = new Solution(data[i][0])
        break;
      case 'pick':
        console.log(solution.pick(data[i][0]))
        break;
    }
  }
})

// Solution:
// 将每个数下标保存在 hash 中
// 当 pick 一个数时，通过该 hash 值随机返回一个下标即可。

// Submission Result: Accepted
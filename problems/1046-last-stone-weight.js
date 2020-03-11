// 1046. Last Stone Weight
// Easy   63%


// We have a collection of rocks, each rock has a positive integer weight.
// Each turn, we choose the two heaviest rocks and smash them together.  Suppose
// the stones have weights x and y with x <= y.  The result of this smash is:
//     If x == y, both stones are totally destroyed;
//     If x != y, the stone of weight x is totally destroyed, and the stone of
// weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone
// (or 0 if there are no stones left.)

// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value
// of last stone.

// Note:
//     1 <= stones.length <= 30
//     1 <= stones[i] <= 1000


/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
  for (let i = 1; i < stones.length; i++) {
    let y = 0, x = 1
    if (stones[y] < stones[x]) [y, x] = [x, y]
    for (let j = 2; j < stones.length; j++) {
      if (stones[j] > stones[y]) [y, x] = [j, y]
      else if (stones[j] > stones[x]) x = j
    }

    stones[y] = stones[y] - stones[x]
    stones[x] = 0
    i += stones[y] == 0 ? 1 : 0
  }

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] !== 0) return stones[i]
  }
  return 0
}

;[
  [2,7,4,1,8,1],  // 1
  [1,1],          // 0
  [1],            // 1
  [1,6],          // 5
  [10,4,2,10],    // 2
  [10,5,10],      // 5
].forEach((stones) => {
  console.log(lastStoneWeight(stones))
})

// Solution:
// 执行 n 次，每次遍历一遍数组，找出最大的两个数
// 两数进行相减的结果替换数1，并将数2设置为 0
// 最后遍历一遍找出不为0的数
// TO(n*n)-SO(1)

// Submission Result: Accepted
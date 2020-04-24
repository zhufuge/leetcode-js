// 888. Fair Candy Swap
// Easy   57%


// Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th
// bar of candy that Alice has, and B[j] is the size of the j-th bar of candy
// that Bob has.
// Since they are friends, they would like to exchange one candy bar each so that
// after the exchange, they both have the same total amount of candy.  (The total
// amount of candy a person has is the sum of the sizes of candy bars they have.)
// Return an integer array ans where ans[0] is the size of the candy bar that
// Alice must exchange, and ans[1] is the size of the candy bar that Bob must
// exchange.
// If there are multiple answers, you may return any one of them.  It is
// guaranteed an answer exists.

// Example 1:
// Input: A = [1,1], B = [2,2]
// Output: [1,2]
// Example 2:
// Input: A = [1,2], B = [2,3]
// Output: [1,2]
// Example 3:
// Input: A = [2], B = [1,3]
// Output: [2,3]
// Example 4:
// Input: A = [1,2,5], B = [2,4]
// Output: [5,4]

// Note:
//     1 <= A.length <= 10000
//     1 <= B.length <= 10000
//     1 <= A[i] <= 100000
//     1 <= B[i] <= 100000
//     It is guaranteed that Alice and Bob have different total amounts of candy.
//     It is guaranteed there exists an answer.


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = function(A, B) {
  const diff = (A.reduce((s, v) => s + v, 0) - B.reduce((s, v) => s + v, 0)) / 2

  const set = new Set(A)
  for (let b of B) {
    if (set.has(b + diff)) return [b + diff, b]
  }
  return []
}

;[
  // [[1,1], [2,2]], // [1,2]
  // [[1,2], [2,3]], // [1,2]
  // [[2], [1,3]],   // [2,3]
  // [[1,2,5],[2,4]], // [5,4]
  // [[35,17,4,24,10],[63,21]], // [24,21]
  [[8,73,2,86,32], [56,5,67,100,31]], // [2, 31]
].forEach(([A, B]) => {
  console.log(fairCandySwap(A, B))
})

// Solution:
// 计算 A 的总和 与 B 的总和 的差 diff
// 再分别找到 A 的一个值 a 和 B 的一个值 b，使得 2 * (a - b) == diff
// T(M*N)

// 更好的方法
// 再寻找 a 和 b 时，使用 Set 数据结构
// Set 也许是 Hash 的，寻找数值的速度为 O(1)
// T(N)

// Submission Result: Accepted
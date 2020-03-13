// 1025. Divisor Game
// Easy   66%


// Alice and Bob take turns playing a game, with Alice starting first.
// Initially, there is a number N on the chalkboard.  On each player's turn, that
// player makes a move consisting of:
//     Choosing any x with 0 < x < N and N % x == 0.
//     Replacing the number N on the chalkboard with N - x.
// Also, if a player cannot make a move, they lose the game.
// Return True if and only if Alice wins the game, assuming both players play
// optimally.

// Example 1:
// Input: 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
// Example 2:
// Input: 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

// Note:
//     1 <= N <= 1000


/**
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = function(N) {
  return N % 2 === 0
}

;[
  2,  // true
  3,  // false
].forEach((N) => {
  console.log(divisorGame(N))
})

// Solution:
// 方法1
// 因为每个人决策最优
// 因此使用递归的算法
// 假设当前轮到 Alice
// 在找出所有的因数后，选择使得 N 变为 N - x 后 Bob 如何选都会输的 x
// 若没有这样的 x，则 Alice 必输

// 方法2
// 通过从1到比较小的数的依次推算，发现：
// 1) 奇数，Alice 必输
// 2) 偶数，必赢

// 使用归纳法可以证明

// Submission Result: Accepted
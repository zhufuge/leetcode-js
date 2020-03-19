// 997. Find the Town Judge
// Easy   50%


// In a town, there are N people labelled from 1 to N.  There is a rumor that one
// of these people is secretly the town judge.
// If the town judge exists, then:
//     The town judge trusts nobody.
//     Everybody (except for the town judge) trusts the town judge.
//     There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the
// person labelled a trusts the person labelled b.
// If the town judge exists and can be identified, return the label of the town
// judge.  Otherwise, return -1.

// Example 1:
// Input: N = 2, trust = [[1,2]]
// Output: 2
// Example 2:
// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:
// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
// Example 4:
// Input: N = 3, trust = [[1,2],[2,3]]
// Output: -1
// Example 5:
// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

// Note:
//     1 <= N <= 1000
//     trust.length <= 10000
//     trust[i] are all different
//     trust[i][0] != trust[i][1]
//     1 <= trust[i][0], trust[i][1] <= N


/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
  const count = Array(N + 1).fill(0)
  for (let t of trust) {
    count[t[0]]--
    count[t[1]]++
  }
  for (let i = 1; i <= N; i++) {
    if (count[i] === N - 1) return i
  }
  return -1
}

;[
  [2, [[1,2]]],              // 2
  [3, [[1,3],[2,3]]],        // 3
  [3, [[1,3],[2,3],[3,1]]],  // -1
  [3, [[1,2],[2,3]]],        // -1
  [4, [[1,3],[1,4],[2,3],[2,4],[4,3]]], // 3
].forEach(([N, trust]) => {
  console.log(findJudge(N, trust))
})

// Solution:
// 使用投票箱的方式来统计
// 每个人一个箱子
// 若有人去投票，则这个人的箱子就会被关闭，设为 -1
// 最后查看箱子里的票，若有箱子的票数量为 N - 1，则该箱子的人为法官

// 简化
// 不用关闭箱子，而是允许箱子的票为负数
// 投票的人，自己的箱子票数减1

// Submission Result: Accepted
// 458. Poor Pigs
// Easy   40%


// There are 1000 buckets, one and only one of them contains poison, the rest are
// filled with water. They all look the same. If a pig drinks that poison it will
// die within 15 minutes. What is the minimum amount of pigs you need to figure
// out which bucket contains the poison within one hour.

// Answer this question, and write an algorithm for the follow-up general case.

// Follow-up:

// If there are n buckets and a pig drinking poison will die within m minutes,
// how many pigs (x) you need to figure out the "poison" bucket within p minutes?
// There is exact one bucket with poison.


/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = function(buckets, minutesToDie, minutesToTest) {
  let pigs = 0
  while (Math.pow(minutesToTest / minutesToDie + 1, pigs) < buckets) pigs++
  return pigs
}

;[
  [1000, 15, 60],               // 5
].forEach(args => {
  console.log(poorPigs(...args))
})

// Solution:
// 若有n只猪，则可将桶摆为n维体，每只猪负责一个象限。
// n只猪都死在其象限的某个值上，这些在组合起来就能定位到有毒的桶了。
// 时间定义了每个象限的范围。

// 假设2只猪，一共45分钟，每15分钟试一次，16个桶。
//  1  2  3  4
//  5  6  7  8
//  9 10 11 12
// 13 14 15 16
// 一只猪负责行，另一只负责列。每次一行（列）。最后一行（列）不用测试。
// 比如第一只猪在测试第2行时死掉了，那么一定在这行。
// 而第二只猪最后都没死，那么就说明有毒的桶在最后一列。即毒桶为8。

// Submission Result: Accepted

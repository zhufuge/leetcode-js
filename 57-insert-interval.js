// 57. Insert Interval
// Hard   28%

// Given a set of non-overlapping intervals, insert a new interval into the
// intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their
// start times.

// Example 1: Given intervals [1,3],[6,9], insert and merge [2,5] in as
// [1,5],[6,9].

// Example 2: Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in
// as [1,2],[3,10],[12,16].

// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

/**
 * Definition for an interval.
 */

function Interval(start, end) {
  this.start = start
  this.end = end
}

function createIntervals(array) {
  return array.map(v => new Interval(v[0], v[1]))
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = function(intervals, newInterval) {
  const result = [], n = intervals.length
  let i = 0
  while (i < n && intervals[i].end < newInterval.start) result.push(intervals[i++])

  while (i < n && intervals[i].start <= newInterval.end) {
    newInterval = new Interval(
      Math.min(newInterval.start, intervals[i].start),
      Math.max(newInterval.end, intervals[i].end)
    )
    i++
  }
  result.push(newInterval)

  while (i < n) result.push(intervals[i++])
  return result
}

;[
  [[[1, 3], [6, 9]], [2, 5]],
  [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 9]],
  [[[1, 5]], [0, 3]],
  [[[1, 5], [6, 8]], [0, 9]],
  [[], [1, 5]],
  [[[1, 5]], [6, 8]],
  [[[1, 5]], [0, 1]],
].forEach(([pairs, aPair]) => {
  console.log(insert(createIntervals(pairs), new Interval(...aPair)))
})

// Solution:
// 直接向前的方式。
// 先将不会重叠间隔添加到答案中。
// 再不断将会重叠合并成新的间隔，作为参数间隔的值。
// 最后再将不会重叠的剩下的间隔添加到答案中。

// Submission Result: Accepted

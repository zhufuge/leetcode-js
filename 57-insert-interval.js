// 57. Insert Interval
// Hard 28% locked:false

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
  const intervals = []
  for (let v of array) {
    intervals.push(new Interval(v[0], v[1]))
  }
  return intervals
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = function(intervals, newInterval) {
  if (intervals === void 0 || newInterval === void 0) return intervals
  const n = intervals.length
  if (n === 0) return [newInterval]

  let start = 0, end = n - 1
  for (let i = 0; i < n; i++) {
    if (intervals[i].start <= newInterval.start) start = i
    if (newInterval.end < intervals[i].start && end === n - 1) end = i - 1
  }
  console.log(start, end);
  if (intervals[start].end < newInterval.start) start++
  if (start > end) intervals.splice(start, 0, newInterval)
  else if (intervals[start].end >= newInterval.start) {
    const merge = new Interval(Math.min(intervals[start].start, newInterval.start),
                               Math.max(intervals[end].end, newInterval.end))
    intervals.splice(start, end - start + 1, merge)
  }

  return intervals
}

//console.log(insert(createIntervals([[1, 3], [6, 9]]), new Interval(2, 5)))
//console.log(insert(createIntervals([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]), new Interval(4, 9)))
console.log(insert(createIntervals([[1,5]]), new Interval(0, 3)))
console.log(insert(createIntervals([[1,5],[6,8]]), new Interval(0, 9)))

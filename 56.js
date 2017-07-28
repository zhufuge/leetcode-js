// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

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
 * @return {Interval[]}
 */
const merge = function(intervals) {
  const mergeTwo = (a, b) => {
    if ((a.end >= b.start && a.start <= b.end) ||
        (b.end >= a.start && b.start <= a.end))
      return [new Interval(Math.min(a.start, b.start), Math.max(a.end, b.end))]
    return []
  }

  for (let i = 0; intervals.length > 1 && i < intervals.length;) {
    const m = intervals.length
    for (let j = i + 1; j < intervals.length; j++) {
      const p = intervals[i],
            q = intervals[j],
            m = mergeTwo(p, q)
      if (m.length === 1) {
        intervals.splice(j, 1)
        intervals.splice(i, 1, ...m)
        j--
      }
    }
    if (intervals.length === m) i++
  }

  return intervals
}

//console.log(merge(createIntervals([[1,3],[2,6],[8,10],[15,18]])))
//console.log(merge(createIntervals([[2,3],[4,5],[6,7],[8,9],[1,10]])))
//console.log(merge(createIntervals([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])))
console.log(merge(createIntervals([[1,3],[5,7],[4,6]])))

// 56. Merge Intervals
// Medium   30%

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
  return array.map(v => new Interval(v[0], v[1]))
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start)
  const result = []
  let last = -1
  for (let interval of intervals) {
    if (last < 0 || result[last].end < interval.start) {
      result.push(interval)
      last++
    } else {
      result[last].end = Math.max(result[last].end, interval.end)
    }
  }
  return result
}

const mergeWithHash = function(intervals) {
  const hash = {}
  for (let interval of intervals) {
    hash[interval.start] = (hash[interval.start] || 0) + 1
    hash[interval.end] = (hash[interval.end] || 0) - 1
  }

  const result = []
  let start = 0, count = 0
  for (let time in hash) {
    if (count === 0) start = time - 0
    count += hash[time] - 0
    if (count === 0) result.push(new Interval(start, time - 0))
  }
  return result
}

;[
  [[1,3],[2,6],[8,10],[15,18]],
  [[2,3],[4,5],[6,7],[8,9],[1,10]],
  [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]],
  [[1,3],[5,7],[4,6]],
].forEach(pairs => {
  console.log(merge(createIntervals(pairs)))
  console.log(mergeWithHash(createIntervals(pairs)))
})

// Solution:
// 方法一：
// 使用哈希表，保存每个时间段的两个边界点数。
// 若为开始边界，则该边界的哈希值初始化为1，若再次出现为开始边界，则加1。
// 若为结束边界，则初始化为-1，若再次出现为结束边界，则减1。

// 按边界值的从小到大的顺序，遍历哈希表。
// 记录一个值，其为遍历过的哈希值的总和。
// 该值初始化为0，同时记录新的开始边界。
// 当该值再次为0时，使用新的开始边界和当前数，构造一个新的间隔，并在下一个数更新开始边界。

// 方法二：
// 使用排序。
// 按开始边界的值升序排序数组。
// 先将第一个间隔加入答案中。
// 之后每次检查答案数组中的最后一个间隔的结束边界是否小于当前间隔的开始边界，
// 若小于，则将该间隔添加到答案数组的末尾。
// 若大于或等于，则比较两个间隔的结束边界，取较大的作为答案最后一个间隔的结束边界。

// Submission Result: Accepted

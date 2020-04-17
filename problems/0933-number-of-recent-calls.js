// 933. Number of Recent Calls
// Easy   71%


// Write a class RecentCounter to count recent requests.
// It has only one method: ping(int t), where t represents some time in
// milliseconds.
// Return the number of pings that have been made from 3000 milliseconds ago
// until now.
// Any ping with time in [t - 3000, t] will count, including the current ping.
// It is guaranteed that every call to ping uses a strictly larger value of t
// than before.

// Example 1:
// Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs =
// [[],[1],[100],[3001],[3002]]
// Output: [null,1,2,3,3]

// Note:
//     Each test case will have at most 10000 calls to ping.
//     Each test case will call ping with strictly increasing values of t.
//     Each call to ping will have 1 <= t <= 10^9.




const RecentCounter = function() {
  this.list = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.list.unshift(t)
  while (this.list[this.list.length - 1] < t - 3000) this.list.pop()
  return this.list.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

;[
  [['RecentCounter','ping','ping','ping','ping'], [[],[1],[100],[3001],[3002]]],
  // [null,1,2,3,3]
].forEach(([commands, times]) => {
  let recentCounter = null
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == 'RecentCounter') {
      recentCounter = new RecentCounter()
    } else if (commands[i] == 'ping') {
      console.log(recentCounter.ping(times[i][0]))
    }
  }
})

// Solution:
// 对象内部维护一个数组 list
// 每次 ping 时，将 t 添加到数组头部，
// 然后从数组尾部遍历，将时间差超过 3000 的数从数组中移除，
// 直到找到第一个不超范围的数为止，
// 最后返回数组的长度即可。

// Submission Result: Accepted
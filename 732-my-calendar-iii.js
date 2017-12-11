// 732. My Calendar III
// Hard   52%


// Implement a MyCalendarThree class to store your events. A new event can always
// be added.

// Your class will have one method, book(int start, int end).  Formally, this
// represents a booking on the half open interval [start, end), the range of real
// numbers x such that start <= x < end.

// A K-booking happens when K events have some non-empty intersection (ie., there
// is some time that is common to all K events.)

// For each call to the method MyCalendar.book, return an integer K representing
// the largest integer such that there exists a K-booking in the calendar.

// Your class will be called like this:
// MyCalendarThree cal = new MyCalendarThree();
// MyCalendarThree.book(start, end)

// Example 1:

// MyCalendarThree();
// MyCalendarThree.book(10, 20); // returns 1
// MyCalendarThree.book(50, 60); // returns 1
// MyCalendarThree.book(10, 40); // returns 2
// MyCalendarThree.book(5, 15); // returns 3
// MyCalendarThree.book(5, 10); // returns 3
// MyCalendarThree.book(25, 55); // returns 3
// Explanation:
// The first two events can be booked and are disjoint, so the maximum K-booking
// is a 1-booking.
// The third event [10, 40) intersects the first event, and the maximum K-booking
// is a 2-booking.
// The remaining events cause the maximum K-booking to be only a 3-booking.
// Note that the last event locally causes a 2-booking, but the answer is still 3
// because
// eg. [10, 20), [10, 40), and [5, 15) are still triple booked.

// Note:

// The number of calls to MyCalendarThree.book per test case will be at most 400.
// In calls to MyCalendarThree.book(start, end), start and end are integers in
// the range [0, 10^9].


const MyCalendarThree = function() {
  this.times = {}
}

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  if (this.times[start] == null) this.times[start] = 0
  if (this.times[end] == null) this.times[end] = 0
  this.times[start]++
  this.times[end]--

  let active = 0, result = 0
  for (let time in this.times) {
    active += this.times[time]
    if (active > result) result = active
  }
  return result
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarThree).createNew()
 * var param_1 = obj.book(start,end)
 */

const myCalendarThree = new MyCalendarThree()
;[
  [24,40],                      // 1
  [43,50],                      // 1
  [27,43],                      // 2
  [5,21],                       // 2
  [30,40],                      // 3
  [14,29],                      // 3
  [3,19],                       // 3
  [3,14],                       // 3
  [25,39],                      // 4
  [6,19],                       // 4
].forEach(args => {
  console.log(myCalendarThree.book(...args))
})

// Solution:
// y ^
// 6 |              [-----------------)
// 5 |  [--)
// 4 |  [-----)
// 3 |     [-----------------)
// 2 |                             [-----)
// 1 |     [-----)
//   --------------------------------------->
//   0  5 10 15 20 25 30 35 40 45 50 55 60  x


// y ^       3
// 6 |       |      [-----------------)
// 5 |  [--) |
// 4 |  [----|)
// 3 |     [-|---------------)
// 2 |       |                     [-----)
// 1 |     [-|---)
//   --------|------------------------------>
//   0  5 10 15 20 25 30 35 40 45 50 55 60  x


// 将时间排在一个如同上同的坐标中。
// 用一条平行于y轴的直线，从0相交开始向x轴正方向前进（如同时间流逝）。
// 在某个时间点可能会与某些时间相交，相交的点数即是该时刻发生的事件的数量。
// 找出整个过程中相交点数最大的数。

// 将时间存放在一个哈希表中，
// 开始时间用正数表示，每一个开始时间都在其哈希中加一。
// 结束时间用负数表示，每一个结束时间都在其哈希中减一。

// 按从小到大的顺序，遍历哈希中的时间。
// 将哈希值依次累加（该操作为：每遇到一个开始时间就加一，遇到一个结束时间就减一）
// 保存过程中的最大值，作为返回值。

// Submission Result: Accepted

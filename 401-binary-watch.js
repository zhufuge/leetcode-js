// 401. Binary Watch
// Easy   44%


// A binary watch has 4 LEDs on the top which represent the hourset (0-11), and the
// 6 LEDs on the bottom represent the minuteset (0-59).

// Each LED represents a zero or one, with the least significant bit on the
// right.

// For example, the above binary watch reads "3:25".

// Given a non-negative integer n which represents the number of LEDs that are
// currently on, return all possible times the watch could represent.

// Example:

// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08",
// "0:16", "0:32"]

// Note:

// The order of output does not matter.
// The hour must not contain a leading zero, for example "01:00" is not valid, it
// should be "1:00".
// The minute must be consist of two digits and may contain a leading zero, for
// example "10:2" is not valid, it should be "10:02".


/**
 * @param {number} num
 * @return {string[]}
 */
const readBinaryWatch = function(num) {
  if (num < 0 || num > 10) return []

  function iter(num, layer, count=0, array=[]) {
    if (layer >= 0) {
      if (num === 0) {
        array.push(count)
      } else {
        array = iter(num, layer - 1, count, array)
        array = iter(num - 1, layer - 1, count + (1 << (layer - 1)), array)
      }
    }
    return array
  }

  const result = [], n = Math.min(num, 4)
  for (let i = 0; i <= n; i++) {
    const hours = iter(i, 4), minutes = iter(num - i, 6)
    console.log(hours, minutes);
    for (let hour of hours) {
      if (hour < 12) {
        for (let minute of minutes) {
          if (minute < 60) {
            result.push(hour + ':' + (minute < 10 ? '0' + minute : minute))
          }
        }
      }
    }
  }
  return result
}

;[
  1,
].forEach(num => {
  console.log(readBinaryWatch(num))
})

// Solution:
// 用一个函数来计算 n 盏灯能组成什么数字。
// 该函数用类似抉择数一样的结构来生成可能组成的数。

// 先分配小时和分钟各占的灯数。
// 分别用占用的灯数来生成数组。
// 两个数组中的数两两组合。

// Submission Result: Accepted

// 1154. Day of the Year
// Easy   49%


// Given a string date representing a Gregorian calendar date formatted as
// YYYY-MM-DD, return the day number of the year.

// Example 1:
// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:
// Input: date = "2019-02-10"
// Output: 41
// Example 3:
// Input: date = "2003-03-01"
// Output: 60
// Example 4:
// Input: date = "2004-03-01"
// Output: 61

// Constraints:
//     date.length == 10
//     date[4] == date[7] == '-', and all other date[i]'s are digits
//     date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.


/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = function(date) {
  let [y, m, res] = date.split('-').map(a => Number.parseInt(a))
  const md = [
    31,
    y % 4 == 0 && (y % 100 != 0 || y % 400 == 0) ? 29 : 28,
    31,30,31,30,31,31,30,31,30,31
  ]
  while (--m > 0) res += md[m - 1]
  return res
}
;[
  '2019-01-09', // 9
  '2019-02-10', // 41
  '2003-03-01', // 60
  '2004-03-01', // 61
  '2020-12-31', // 366
  "1900-03-25", // 84
].forEach((date) => {
  console.log(dayOfYear(date))
})

// Solution:
// !!注意 2月的天数
// 闰年的定义
// 1. 能被 400 整除
// 2. 能被 4 整除同时不能被 100 整除


// Submission Result: Accepted
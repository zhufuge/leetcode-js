// 1360. Number of Days Between Two Dates
// Easy   49%


// Write a program to count the number of days between two dates.
// The two dates are given as strings, their format is YYYY-MM-DD as shown in the
// examples.

// Example 1:
// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:
// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15

// Constraints:
//     The given dates are valid dates between the years 1971 and 2100.


/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = function(date1, date2) {
  return Math.abs((new Date(date1) - new Date(date2)) / 86400000)
}

;[
  ['2019-06-29', '2019-06-30'],
  ['2020-01-15', '2019-12-31'],
].forEach(([date1, date2]) => {
  console.log(daysBetweenDates(date1, date2))
})

// Solution:
// 使用 Date API 解决（作弊）
// TODO #1360 不使用 API

// Submission Result: Accepted
// 1185. Day of the Week
// Easy   64%


// Given a date, return the corresponding day of the week for that date.
// The input is given as three integers representing the day, month and year
// respectively.
// Return the answer as one of the following values {"Sunday", "Monday",
// "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

// Example 1:
// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:
// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:
// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"

// Constraints:
//     The given dates are valid dates between the years 1971 and 2100.


/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = function(day, month, year) {
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  if (month < 3) {
    month += 12
    year -= 1
  }
  const c = Math.floor(year / 100)
  year = year % 100
  // LEARN #1185 日期算出星期
  const w = (
    Math.floor(c / 4) - 2 * c + year + Math.floor(year / 4) +
    Math.floor(13 * (month + 1) / 5) +
    day - 1
  ) % 7
  return DAYS[Math.floor(w + 7) % 7]
}

const builtInFunc = function(day, month, year) {
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return DAYS[new Date(year, month - 1, day).getDay()]
}

;[
  [1,  1, 1971], // Fri
  [31, 8, 2019],
  [18, 7, 1999],
  [15, 8, 1993],
].forEach(([day,month, year]) => {
  console.log(dayOfTheWeek(day, month, year))
})

// Solution:
// 方法一，使用内置 Date 对象的函数

// 方法二，
// TODO #1185 日期算出星期

// Submission Result: Accepted
// 412. Fizz Buzz
// Easy   58%


// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and
// for the multiples of five output “Buzz”. For numbers which are multiples of
// both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]


/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    result.push(
      (i % 3 && i % 5)
        ? '' + i
        : (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')
    )
  }
  return result
}

;[
  15,
].forEach(n => {
  console.log(fizzBuzz(n))
})

// Solution:
// % 运算

// Submission Result: Accepted

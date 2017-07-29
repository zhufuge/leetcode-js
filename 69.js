// Implement int sqrt(int x).

// Compute and return the square root of x.


/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  const iter = (x_0) => Math.abs(x - x_0 * x_0) < 1 ? x_0 : iter((x / x_0 + x_0) / 2)
  return Math.trunc(iter(1))
}

console.log(mySqrt(100))

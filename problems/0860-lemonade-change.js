// 860. Lemonade Change
// Easy   51%


// At a lemonade stand, each lemonade costs $5.
// Customers are standing in a queue to buy from you, and order one at a time (in
// the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20
// bill.  You must provide the correct change to each customer, so that the net
// transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.
// Example 2:
// Input: [5,5,10]
// Output: true
// Example 3:
// Input: [10,10]
// Output: false
// Example 4:
// Input: [5,5,10,10,20]
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5
// bill.
// For the last customer, we can't give change of $15 back because we only have
// two $10 bills.
// Since not every customer received correct change, the answer is false.

// Note:
//     0 <= bills.length <= 10000
//     bills[i] will be either 5, 10, or 20.


/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  let B5 = 0, B10 = 0
  for (let b of bills) {
    if (b === 5) {
      B5++
    } else if (b === 10) {
      B5--
      B10++
      if (B5 < 0) return false
    } else if (b === 20) {
      if (B10 > 0) {
        B10--
        B5--
        if (B5 < 0) return false
      } else {
        B5 -= 3
        if (B5 < 0) return false
      }
    }
  }
  return true
}

const prettier = function(bills) {
  let five = 0, ten = 0
  for (let b of bills) {
    if (b === 5) five++
    else if (b === 10) five--, ten++
    else if (ten > 0) ten--, five--
    else five -= 3
    if (five < 0) return false
  }
  return true
}

;[
  // [5,5,5,10,20], // true
  // [5,5,10],      // true
  // [10,10],       // false
  // [5,5,10,10,20],// false
  [5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5], // true
].forEach((bills) => {
  console.log(lemonadeChange(bills))
})

// Solution:
// 记录收到的 $5 和 $10 的数量
// 在收到一个 $10 时，需要返回一个 $5
// 收到一个 $20 时，可以返回 $10 + $5 或 3 * $5，有 $10 时优先返回 $10
// 每次交易（假设允许 $5 的数量为负）后，判断 $5 的数量是否小于零，是则返回 false
// 完成所有交易后 返回 true

// Submission Result: Accepted
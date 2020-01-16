// 657. Judge Route Circle
// Easy 68% locked:false


// Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
// judge if this robot makes a circle, which means it moves back to the original
// place.

// The move sequence is represented by a string. And each move is represent by a
// character. The valid robot moves are R (Right), L (Left), U (Up) and D (down).
// The output should be true or false representing whether the robot makes a
// circle.

// Example 1:
  
// Input: "UD"
// Output: true

// Example 2:

// Input: "LL"
// Output: false


/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
  let h = 0, v = 0
  for (let i = 0, len = moves.length; i < len; i++) {
    const move = moves[i]
    if (move === 'U') v--
    if (move === 'D') v++
    if (move === 'R') h--
    if (move === 'L') h++
  }
  return h === 0 && v === 0
}

;[
  'UD',                         // true
  'LL',                         // false
].forEach((moves) => {
  console.log(judgeCircle(moves))
})

// Solution:
// 如果在数量上 U === D && R === L 则是在转圈，否则不是。

// Submission Result: Accepted

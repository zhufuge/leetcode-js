// 804. Unique Morse Code Words
// Easy   76%


// International Morse Code defines a standard encoding where each letter is
// mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps
// to "-...", "c" maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is
// given below:

// [
//   '.-',  // a
//   '-...',// b
//   '-.-.',
//   '-..',
//   '.',   // e
//   '..-.',
//   '--.', // g
//   '....',
//   '..',  // i
//   '.---',
//   '-.-',
//   '.-..',
//   '--',
//   '-.',  // n
//   '---',
//   '.--.',
//   '--.-',
//   '.-.',
//   '...',
//   '-',
//   '..-',
//   '...-',
//   '.--',
//   '-..-',
//   '-.--',
//   '--..',// z
// ]

// Now, given a list of words, each word can be written as a concatenation of the
// Morse code of each letter. For example, "cba" can be written as "-.-.-....-",
// (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a
// concatenation, the transformation of a word.
// Return the number of different transformations among all words we have.
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations, "--...-." and "--...--.".
// Note:
//     The length of words will be at most 100.
//     Each words[i] will have length in range [1, 12].
//     words[i] will only consist of lowercase letters.


/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const set = new Set()
  for (let word of words) {
    let s = ''
    for (let c of word) {
      s += MORSE[c.charCodeAt(0) - 97]
    }
    set.add(s)
  }
  return set.size
}

;[
  ['gin', 'zen', 'gig', 'msg'],
].forEach((words) => {
  console.log(uniqueMorseRepresentations(words))
})

// Solution:
// 用 Set 去重。

// Submission Result: Accepted
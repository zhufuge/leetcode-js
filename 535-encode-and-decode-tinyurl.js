// 535. Encode and Decode TinyURL
// Medium   74%


// Note: This is a companion problem to the System Design problem: Design
// TinyURL.

// TinyURL is a URL shortening service where you enter a URL such as
// https://leetcode.com/problems/design-tinyurl and it returns a short URL such
// as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no
// restriction on how your encode/decode algorithm should work. You just need to
// ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded
// to the original URL.


const map = []

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function(longUrl) {
  map.push(longUrl)
  return 'http://tinyurl.com/' + (map.length - 1)
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl) {
  const array = shortUrl.split('/')
  const number = parseInt(array[array.length - 1])
  return map[number]
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
;[
  'https://leetcode.com/problems/design-tinyurl',
].forEach(s => {
  console.log(s)
  const short = encode(s)
  console.log(short)
  const long = decode(short)
  console.log(long)
})

// Solution:
// 用数字来表示url,
// 并用数组来存储原来的url。

// Submission Result: Accepted

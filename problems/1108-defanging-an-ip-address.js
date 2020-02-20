// 1108. Defanging an IP Address
// Easy   86%


// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:
//     The given address is a valid IPv4 address.


/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]')
}

;[
  '1.1.1.1',
  '255.100.50.0',
].forEach((address) => {
  console.log(defangIPaddr(address))
})

// Solution:
// 使用replace函数，注意用正则表达的全局匹配，否则只替换一个。

// Submission Result: Accepted
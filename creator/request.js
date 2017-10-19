const request = require('request')
const fs = require('fs')

request('https://leetcode.com/problemset/all/')
  .pipe(fs.createWriteStream('leetcode.com.problemset.all.html'))

// fails

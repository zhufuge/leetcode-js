const request = require('request')
const fs = require('fs')

request('https://leetcode.com/problems/all')
  .pipe(fs.createWriteStream('all.html'))

// fails

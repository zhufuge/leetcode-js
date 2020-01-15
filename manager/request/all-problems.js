// Request all problem by leetcode api.

const request = require('request')
const fs = require('fs')
const { PROBLEMS_API, PROBLEMS_STORE_PATH } = require('../common')


function main(callback) {
  request.get(PROBLEMS_API, function (error, response, body) {
    if (error) {
      console.log(error)
      throw Error('Request Error!')
    }

    console.log('Request OK!')
    const json = JSON.parse(body)
    const problems = json['stat_status_pairs']
    fs.writeFileSync(PROBLEMS_STORE_PATH, JSON.stringify(problems, null, 2), 'utf8')
    console.log('Request problems total:', problems.length)

    if (callback) callback(error, response, body)
  })
}

if (!module.parent) {
  main()
}

module.exports = main
const request = require('request')
const fs = require('fs')
const { PROBLEMS_API, PROBLEMS_PATH } = require('./common')

function callback(error, response, body) {
  if (error) {
    console.log(error)
    throw Error('Request Error!')
  }

  console.log('Request OK!')
  const json = JSON.parse(body)
  const problems = json['stat_status_pairs']
  fs.writeFileSync(PROBLEMS_PATH, JSON.stringify(problems), 'utf8')
  console.log('Request problems total:', problems.length)
}

function main() {
  request.get(PROBLEMS_API, callback)
}

if (!module.parent) {
  main()
}

module.exports = main
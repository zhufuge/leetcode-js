const process = require('process')
const { exec } = require('child_process')
const colors = require('colors')
const { getProblem } = require('../store')

module.exports = function test(number) {
  const problem = getProblem(number)
  console.log(problem.stat.question__title.blue)
  exec('node ' + problem.filePath, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    if (stdout) console.log(stdout)
    if (stderr) console.log(`stderr: ${stderr}`)
  })
}
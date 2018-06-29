const process = require('process')
const { exec } = require('child_process')
const colors = require('colors')
const { getProblem } = require('./request')

function test(number) {
  const problem = getProblem(number)
  console.log(problem.title.blue)
  exec('node ' + problem.filePath, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    if (stdout) console.log(stdout)
    if (stderr) console.log(`stderr: ${stderr}`)
  })
}

function main() {
  if (process.argv[2]) {
    test(parseInt(process.argv[2]))
  } else {
    console.log('Please input problem\'s number.')
  }
}

main()

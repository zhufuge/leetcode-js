const process = require('process')

const { update } = require('./request')
const { generate, generateList } = require('./generate')
const test = require('./test')

function generateProblem() {
  const input = process.argv[3]
  if (input) {
    const number = parseInt(input)
    if (Number.isInteger(number)) {
      generate(number)
      return
    }
  }
  console.log('Please input problem\'s number.')
}

function testProblem() {
  const input = process.argv[3]
  if (input) {
    const number = parseInt(input)
    if (Number.isInteger(number)) {
      test(number)
      return
    }
  }
  console.log('Please input problem\'s number.')
}

function main() {
  const scripts = {
    'try': generateProblem,
    'list': generateList,
    'test': testProblem,
    'update': update,
  }
  ;(scripts[process.argv[2]] || (() => {}))()
}

main()
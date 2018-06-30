const process = require('process')

const { generate } = require('./generate')

function main() {
  if (process.argv[2]) {
    const number = parseInt(process.argv[2])
    if (Number.isInteger(number)) {
      generate(number)
      return
    }
  }
  console.log('Please input problem\'s number.')
}

main()
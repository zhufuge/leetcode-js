const { join } = require('path')
const { writeFileSync } = require('fs')
const { select } = require('./store')

async function main() {
  const problems = await select('', [])
  const json = {}
  for (let problem of problems) {
    json[problem.id] = problem
  }
  writeFileSync(join(__dirname, 'cache', 'problems.all.json'),
                JSON.stringify(json))
}

main()

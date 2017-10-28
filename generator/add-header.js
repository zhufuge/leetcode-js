const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, '../'))
      .filter((f) => path.extname(f) === '.js')
const problems = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'cache', 'problems.all.json'), 'utf8')
)

files.forEach((f) => {
  const basename = path.basename(f, '.js')
  const number = basename.match(/(\d*)-.*/)[1]
  const problem = problems[number]
  if (problem) {
    const filepath = path.join(__dirname, '../', f)
    const content = fs.readFileSync(filepath, 'utf8')
    const header = '// ' + number + '. ' + problem.title +
          '// ' + problem.difficulty + ' ' + problem.acceptance +
          ' locked:' + problem.locked + '\n'

    fs.writeFileSync(filepath, header + content,'utf8')
  }
})

const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, '../'))
      .filter((f) => path.extname(f) === '.js')

const problems = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'problems.all.json'), 'utf8')
)

files.forEach((f) => {
  const basename = path.basename(f, '.js')
  const number = basename.match(/(\d*)-.*/)[1]
  if (problems[number]) {
    const title = problems[number].title.split(' ').join('-').toLowerCase()
    const name = number + '-' + title + '.js'
    fs.renameSync(path.join(__dirname, '../', f), path.join(__dirname, '../', name))
  }
})

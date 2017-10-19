const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('../').filter((f) => path.extname(f) === '.js')
const problems = JSON.parse(fs.readFileSync('problems.all.json', 'utf8'))

files.forEach((f) => {
  const basename = path.basename(f, '.js')
  if (problems[basename]) {
    const newName = basename + '-' + problems[basename].title + '.js'
    fs.renameSync(path.join('../', f), path.join('../', newName))
  }
})

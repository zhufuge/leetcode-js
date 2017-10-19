const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('../').filter((f) => path.extname(f) === '.js')
const problems = JSON.parse(fs.readFileSync('problems.all.json', 'utf8'))

files.forEach((f) => {
  const basename = path.basename(f, '.js')
  const number = basename.match(/(\d*)-.*/)[1]
  const problem = problems[number]
  if (problem) {
    const filepath = path.join('../', f)
    const content = fs.readFileSync(filepath, 'utf8')
    const header = `// ${number}. ${problem.title}
// ${problem.difficulty} ${problem.acceptance} locked:${problem.locked}

`

    fs.writeFileSync(filepath, header + content,'utf8')
  }
})

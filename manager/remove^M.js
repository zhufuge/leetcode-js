const fs = require('fs')
const path = require('path')

const DIR_PATH = path.join(__dirname, '..', 'problems')
const files = fs.readdirSync(DIR_PATH)
      .filter((f) => path.extname(f) === '.js')

files.forEach((f) => {
  const filePath = path.join(DIR_PATH, f)
  const content = fs.readFileSync(filePath, 'utf8')
  fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'), 'utf8')
})

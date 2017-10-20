const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, '../')
const files = fs.readdirSync(dirPath)
      .filter((f) => path.extname(f) === '.js')

files.forEach((f) => {
  const filePath = path.join(dirPath, f)
  const content = fs.readFileSync(filePath, 'utf8')
  fs.writeFileSync(filePath, content.replace(/\r/g, ''), 'utf8')
})

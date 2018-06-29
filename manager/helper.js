function exit(...args) {
  console.log('Generate fails!')
  throw new Error(...args)
}

function toLowTitle(title) {
  return title
    .split(' ')
    .filter(w => w !== '' && w !== '-')
    .join('-')
    .replace(/[^A-Za-z0-9-]/g, '')
    .toLowerCase()
}

module.exports = {
  exit,
  toLowTitle,
}

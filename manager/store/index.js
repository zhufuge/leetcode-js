const connect = require('./connect')

function updateAll(data) {
  connect(function(table) {
    if (data) {
      data.forEach(async function(values) {
        await table.update(values)
        console.log(values)
      })

      console.log('Update successed.')
    }
  })
}

function selectBy(id) {
  return connect(function(table) {
    return table.selectBy(id)
  })
}

module.exports = {
  updateAll,
  selectBy,
}

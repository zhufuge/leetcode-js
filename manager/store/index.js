const connect = require('./connect')

function updateAll(data) {
  return connect(async function(table) {
    if (data) {
      let results = data.map(async function(values) {
        return await table.update(values)
      })

      for (let result of results) await result
      console.log('Update successed.')
    }
  })
}

function selectBy(id) {
  return connect(function(table) {
    return table.selectBy(id)
  })
}

function select(attrs, where) {
  return connect(function(table) {
    return table.select(attrs, where)
  })
}

function insert(value) {
  return connect(function(table) {
    return table.insert(value)
  })
}

module.exports = {
  updateAll,
  selectBy,
  select,
  insert,
}

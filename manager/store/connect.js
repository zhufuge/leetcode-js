const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alg',
})

function connectAsync() {
  return new Promise((resolve, reject) => {
    connection.connect(function(error) {
      if (error) {
        console.error('error connecting: ' + error.stack)
        reject(error)
      }
      resolve()
    })
  })
}

const orm = require('./orm')
const init = require('./init')


module.exports = async function(operations) {
  await connectAsync()
  console.log('connected as id ' + connection.threadId)

  await init(connection).catch((error) => {
    console.log(error)
    connection.end()
  })

  const result = await operations(orm(connection).table('problems'))
  console.log('connection end.')
  connection.end()

  return result
}

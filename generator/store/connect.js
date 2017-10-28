const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alg',
})

connection.connect(function(error) {
  if (error) {
    console.error('error connecting: ' + error.stack)
    return
  }

  console.log('connected as id ' + connection.threadId)
  require('./init')(connection)
    .then(() => {
      console.log('connection end.')
      connection.end()
    })
    .catch((error) => {
      console.log(error)
      connection.end()
    })
})

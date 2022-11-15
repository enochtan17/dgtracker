const Pool = require('pg').Pool

const pool = new Pool({
  user: 'dg_app',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'dgtracker'
})

module.exports = pool

// const { Client } = require('pg')

// const client = new Client({
//   host: 'localhost',
//   user: 'dg_app',
//   port: 5432,
//   password: 'password',
//   database: 'dgtracker'
// })

// // client.connect()

// // client.query(`select * from courses`, (err, res) => {
// //   if (!err) console.log('in db query', res.rows)
// //   else console.log(err.message)

// //   client.end
// // })

// module.exports = client

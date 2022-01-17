const Pool = require('pg').Pool
require('dotenv').config()
const user = process.env.user
const password = process.env.password
const host = process.env.host
const database = process.env.database

const pool = new Pool({
  user: user,
  password: password,
  host: host,
  port: 5432,
  database: database,
})

module.exports = pool

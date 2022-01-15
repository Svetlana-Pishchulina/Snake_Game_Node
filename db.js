const Pool = require('pg').Pool
require('dotenv').config()
const password = process.env.password

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'Snake_Game',
})

module.exports = pool

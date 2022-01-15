const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
const scoreRoutes = require('./routes/scorePSQL')
app.use('/score', scoreRoutes)
app.get('/', (req, res) => {
  res.send('are you in Game!')
})

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app

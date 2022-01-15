const db = require('../../db')

const addScore = async (req, res, next) => {
  const name = req.body.name
  const score = req.body.score
  const user = await db.query('SELECT * FROM gameUser WHERE username = $1', [
    name,
  ])
  const userScore = user.rows[0] ? user.rows[0].highestscore : null
  let newUser
  if (!user.rows[0]) {
    const highestScore = score
    newUser = await db.query(
      'INSERT INTO gameUser ( username, highestScore) values ($1, $2) RETURNING *',
      [name, highestScore]
    )
    res.json({
      status: 'success',
      code: 201,
      message: 'result taken into account',
      data: newUser.rows,
    })
  } else if (user.rows[0] && !userScore) {
    await db.query(
      'UPDATE gameUser set highestScore=$1 WHERE username = $2 RETURNING *',
      [score, name]
    )
  } else if (user.rows[0] && score > userScore) {
    await db.query(
      'UPDATE gameUser set highestScore=$1 WHERE username = $2 RETURNING *',
      [score, name]
    )
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'result taken into account',
    data: user,
  })
}

module.exports = addScore

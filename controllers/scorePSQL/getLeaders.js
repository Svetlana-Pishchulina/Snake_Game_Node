const db = require('../../db')

const getLeaders = async (req, res, next) => {
  const allUsersInfo = await db.query('SELECT * FROM gameUser')
  const allUsers = allUsersInfo.rows
  const allUsersDecr = allUsers.sort(function (a, b) {
    if (a.highestscore > b.highestscore) {
      return -1
    }
    if (a.highestscore < b.highestscore) {
      return 1
    }
    if ((a.highestscore = b.highestscore)) {
      return 0
    }
  })
  const leaders = allUsersDecr.slice(0, 3).map((leader) => {
    return { name: leader.username, score: leader.highestscore }
  })

  res.json({
    status: 'success',
    code: 200,
    message: 'leaders found',
    data: { result: leaders },
  })
}

module.exports = getLeaders

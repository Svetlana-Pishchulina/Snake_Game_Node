const controllerWraper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (err) {
      if (err.message.includes('Cast to ObjectId failed')) {
        err.status = 404
        err.message = 'User not found'
      }
      next(err)
    }
  }
}

module.exports = controllerWraper

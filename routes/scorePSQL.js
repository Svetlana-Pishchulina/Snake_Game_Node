const express = require('express')
const router = express.Router()

const { scorePSQL: ctrl } = require('../controllers')
const controllerWrapper = require('../middlewares/controllerWrapper')

router.post('/', controllerWrapper(ctrl.addScore))
router.get('/leaderboard', controllerWrapper(ctrl.getLeaders))
module.exports = router

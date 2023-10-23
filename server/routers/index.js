const { Router } = require('express')
const userRouter = require('./usersRouter')

const router = Router()

router.use('/', userRouter)

module.exports = router
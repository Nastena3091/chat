const { Router } = require('express')
const userRouter = require('./usersRouter')
const chatRouter = require('./chatsRouter')
const messageRouter = require('./messageRouter')

const router = Router()

router.use('/', userRouter)

module.exports = router
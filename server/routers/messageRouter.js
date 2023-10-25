const { Router } = require('express');
const messageController = require('../controllers/messageController');

const messageRouter = Router();


messageRouter
    .route('/message')
    .post(messageController.createMessage)

  module.exports = messageRouter;
const { Router } = require('express');
const chatController = require('../controllers/chatController');

const chatRouter = Router();

chatRouter
    .route('/chat/:chatId/:messageId')
    .post(chatController.updateChat)

chatRouter
    .route('/chats/:userId')
    .get(chatController.findChats)

chatRouter
    .route('/chat/:chatId')
    .get(chatController.findChat)

chatRouter
    .route('/chat')
    .post(chatController.createChat)

module.exports = chatRouter;
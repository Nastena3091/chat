const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter
  .route('/user')
  .post(userController.createUser)

userRouter
  .route('/user/:userId')
  .get(userController.findUser)
  
  module.exports = userRouter;
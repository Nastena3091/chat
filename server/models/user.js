const mongoose = require('mongoose')
const { Schema } = mongoose;

const Users = mongoose.model('User', new Schema({ 
    socketid: String,
    name: String,
    email: String,
    password: String
}));
module.exports = Users
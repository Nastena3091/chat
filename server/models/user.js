const mongoose = require('mongoose')
const { Schema } = mongoose;

const Users = mongoose.model('User', new Schema({ 
    name: String,
    email: String,
    password: String
}));
module.exports = Users
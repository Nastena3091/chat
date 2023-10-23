const mongoose = require('mongoose')
const { Schema } = mongoose;

const Chats = mongoose.model('Chat', new Schema({
    name: String,
    users: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    ],
    messages: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
    ]
}))

module.exports = Chats
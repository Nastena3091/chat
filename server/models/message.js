const mongoose = require('mongoose')
const { Schema } = mongoose;

const Messages = mongoose.model('Message', new Schema({
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    createdAt: Date
}))

module.exports = Messages
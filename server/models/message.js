const mongoose = require('mongoose')
const { Schema } = mongoose;

const Messages = mongoose.model('Message', new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}))

module.exports = Messages
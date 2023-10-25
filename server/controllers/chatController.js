const Chat = require('../models/chat')
module.exports = {
    createChat: (req, res) =>{
        var new_chat = new Chat(req.query)
        new_chat.save(function(err,chat){
            if (err) res.status(400).send(err);
            res.json(chat)
        })
    },
    findChats: (req, res) => {
        Chat.find({'users':{$in:[req.params.userId]}}).populate('users').exec(function(err, chats){
            if (err) res.status(400).send(err);
            res.json(chats)
        })
    },
    findChat:(req, res) => {
        Chat.findById(req.params.chatId).populate('messages').exec(function (err, chat){
            if(err) res.status(400).send(err);
            res.json(chat)
        })
    },
    updateChat:(req, res) => {
        Chat.updateOne({_id:req.params.chatId},
            { $push: {messages:messageId} },
            function(err,chat){
                if (err) res.status(400).send(err);
                res.json(chat)
            })
    }
}